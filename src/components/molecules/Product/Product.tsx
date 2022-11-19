import "./product.scss";
import { IProduct } from "../../../types/IProduct";
import React from "react";

interface IProps {
  product: IProduct;
}

const Product: React.FC<IProps> = ({ product }) => {
  return (
    <div id={"product"}>
      <div className={"product-title"}>{product.name}</div>
      <div className={"product-image"}>
        <img
          src={
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          alt={product.name}
        />
      </div>
      <div className={"product-info"}>
        <p>{product.description}</p>
      </div>
    </div>
  );
};
export default Product;
