import { useState } from "react";
import postImage from "../api/PostImage";
import { AxiosError, AxiosResponse } from "axios";
import { IImage } from "../types/IImage";

interface IUseImageUpload {
  images: IImage[];
  isLoading: boolean;
  error: AxiosError | null;
  uploadImages: (files: FileList) => void;
}

const useImageUpload = (): IUseImageUpload => {
  const [images, setImages] = useState<IImage[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const uploadImages = (files: FileList) => {
    setLoading(true);
    for (let i = 0; i < files.length; i++) {
      const image: File = files[i]!;
      postImage(image)
        .then((res: AxiosResponse<IImage>) =>
          setImages((prev: IImage[]) => {
            return [...prev, res.data];
          })
        )
        .catch((err) => setError(err));
    }
    setLoading(false);
  };

  return { images, isLoading, error, uploadImages };
};
export default useImageUpload;
