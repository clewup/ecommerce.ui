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
      <div className={"order-product-info"}>
        <p>{orderProduct.name}</p>
        <p>{orderProduct.color}</p>
        {orderProduct.discount > 0 ? (
          <div className={"discounted-price"}>
            <p className="discounted-price-striked">
              £
              {(
                (orderProduct.price / (100 - orderProduct.discount)) *
                100
              ).toFixed(2)}
            </p>
            <p className={"discounted-price-total"}>£{orderProduct.price}</p>
          </div>
        ) : (
          <p>£{orderProduct.price}</p>
        )}
      </div>
    </div>
  );
};
export default OrderProduct;
