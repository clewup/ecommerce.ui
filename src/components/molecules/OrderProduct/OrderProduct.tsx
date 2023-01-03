import "./order-product.scss";
import React from "react";
import Text from "../../atoms/Text/Text";
import { IProduct } from "../../../types/IProduct";

interface IProps {
  orderProduct: IProduct;
}

const OrderProduct: React.FC<IProps> = ({ orderProduct }) => {
  return (
    <div id={"order-product"}>
      <div className={"order-product-image"}>
        <img src={orderProduct.images![0]!} alt={orderProduct.images![0]!} />
      </div>
      <div className={"order-product-info"}>
        <Text>
          {orderProduct.name.substring(0, 30)}
          {orderProduct.name.length >= 30 && "..."}
        </Text>
        <Text>{orderProduct.color}</Text>
        {orderProduct.discountedPrice ? (
          <div className={"discounted-price"}>
            <Text className="discounted-price-striked">
              £{orderProduct.price}
            </Text>
            <Text className={"discounted-price-total"}>
              £{orderProduct.discountedPrice}
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
