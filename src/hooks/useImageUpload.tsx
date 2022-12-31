import { useState } from "react";
import postImage from "../api/PostImage";
import { AxiosError, AxiosResponse } from "axios";

interface IUseImageUpload {
  images: string[];
  isLoading: boolean;
  error: AxiosError | null;
  uploadImages: (files: FileList) => void;
  clearImages: () => void;
}

const useImageUpload = (): IUseImageUpload => {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const uploadImages = (files: FileList) => {
    setLoading(true);
    for (let i = 0; i < files.length; i++) {
      const image: File = files[i]!;
      postImage(image)
        .then((res: AxiosResponse<string>) =>
          setImages((prev: string[]) => {
            return [...prev, res.data];
          })
        )
        .catch((err) => setError(err));
    }
    setLoading(false);
  };

  const clearImages = () => {
    setImages([]);
  };

  return { images, clearImages, isLoading, error, uploadImages };
};
export default useImageUpload;
