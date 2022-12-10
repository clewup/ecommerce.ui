import "./order-item.scss";
import React from "react";
import { IProduct } from "../../../types/IProduct";

interface IProps {
  orderItem: IProduct;
}

const OrderItem: React.FC<IProps> = ({ orderItem }) => {
  return (
    <div id={"order-item"}>
      <div className={"order-item-image"}>
        <img src={orderItem.images![0]!.url!} alt={orderItem.name} />
      </div>
      <div className={"cart-item-info"}>
        <p>{orderItem.name}</p>
        <p>£{orderItem.pricePerUnit.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default OrderItem;
