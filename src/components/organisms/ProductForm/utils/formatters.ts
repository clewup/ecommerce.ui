import { IProduct } from "../../../../interfaces/IProduct";

export const formatProduct = (values: IProduct, images: string[]) => {
  return {
    id: values.id,
    name: values.name,
    description: values.description,
    color: values.color,
    images: images,
    category: values.category,
    subcategory: values.subcategory,
    range: values.range,
    size: values.size,
    stock: values.stock,
    price: values.price,
    discount: values.discount,
  } as IProduct;
};
