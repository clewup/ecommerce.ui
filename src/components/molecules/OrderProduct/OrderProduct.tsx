import "./order-product.scss";
import React from "react";
import { ICartProduct } from "../../../types/IProduct";

interface IProps {
  orderProduct: ICartProduct;
}

const OrderProduct: React.FC<IProps> = ({ orderProduct }) => {
  return (
    <div id={"order-product"}>
      <div className={"order-product-image"}>
        <img
          src={orderProduct.images![0]!.url!}
          alt={String(orderProduct.id)}
        />
      </div>
      <div className={"cart-product-info"}>
        <p>{orderProduct.name}</p>
        <p>£{orderProduct.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default OrderProduct;
