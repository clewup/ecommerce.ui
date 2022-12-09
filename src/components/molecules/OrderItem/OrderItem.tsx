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
        <img
          src={
            orderItem.images.length > 0
              ? orderItem.images![0]!.url!
              : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          alt={orderItem.name}
        />
      </div>
      <div className={"cart-item-info"}>
        <p>{orderItem.name}</p>
        <p>£{orderItem.pricePerUnit.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default OrderItem;
