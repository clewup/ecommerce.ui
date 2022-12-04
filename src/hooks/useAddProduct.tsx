import React, { useEffect, useState } from "react";
import { IProduct } from "../types/IProduct";
import { AxiosError } from "axios";
import { FormikValues } from "formik";
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

  const initialValues = {
    name: "",
    description: "",
    category: "",
    stockCount: 0,
    pricePerUnit: "",
    discount: 0,
  };

  const formatProduct = (values: FormikValues) => {
    return {
      id: createGuid(),
      images: images,
      name: values.name,
      description: values.description,
      category: values.category,
      stockCount: values.stockCount,
      pricePerUnit: parseFloat(values.pricePerUnit),
      isDiscounted: parseFloat(values.discount) > 0,
      discount: parseFloat(values.discount),
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
