import "./order-product.scss";
import React from "react";
import { ICartProduct } from "../../../types/IProduct";
import Text from "../../atoms/Text/Text";

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
        <Text>{orderProduct.name}</Text>
        <Text>{orderProduct.color}</Text>
        {orderProduct.discount > 0 ? (
          <div className={"discounted-price"}>
            <Text className="discounted-price-striked">
              £
              {(
                (orderProduct.price / (100 - orderProduct.discount)) *
                100
              ).toFixed(2)}
            </Text>
            <Text className={"discounted-price-total"}>
              £{orderProduct.price}
            </Text>
          </div>
        ) : (
          <Text>£{orderProduct.price}</Text>
        )}
      </div>
    </div>
  );
};
export default OrderProduct;
