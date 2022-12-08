import React, { useEffect, useState } from "react";
import { IProduct } from "../types/IProduct";
import { AxiosError } from "axios";
import { createGuid } from "../utils/CreateGuid";
import postProduct from "../api/PostProduct";
import { IImage } from "../types/IImage";
import postImage from "../api/PostImage";
import { Guid } from "guid-typescript";

const useAddProduct = (product?: IProduct) => {
  const [newImage, setNewImage] = useState<IImage>();
  const [images, setImages] = useState<IImage[]>([]);

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const initialValues: IProduct = {
    name: "",
    images: [],
    description: "",
    category: "",
    pricePerUnit: 0,
    discount: 0,
  };

  const formatProduct = (values: IProduct) => {
    return {
      id: createGuid(),
      images: images,
      name: values.name,
      description: values.description,
      category: values.category,
      pricePerUnit: values.pricePerUnit,
      discount: values.discount,
    } as IProduct;
  };

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file: IImage = {
        url: "",
        file: e.target.files[0],
        description: "",
        timestamp: new Date(),
        id: Guid.create().toString(),
      };
      console.log(file);
      setNewImage(file);
      setLoading(true);
      postImage(newImage!)
        .then((res) => {
          console.log(res);
          setImages((prev: IImage[]) => {
            return [...prev, res.data];
          });
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    if (product) {
      setLoading(true);
      postProduct(product)
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [product]);

  return {
    initialValues,
    isLoading,
    error,
    uploadImage,
    images,
    setImages,
    formatProduct,
  };
};
export default useAddProduct;
