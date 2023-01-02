import "./order-product.scss";
import React from "react";
import Text from "../../atoms/Text/Text";
import { calculatePriceBeforeDiscount } from "../../../utils/calculatePriceBeforeDiscount";
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
        {orderProduct.discount > 0 ? (
          <div className={"discounted-price"}>
            <Text className="discounted-price-striked">
              £
              {calculatePriceBeforeDiscount(
                orderProduct.price,
                orderProduct.discount
              )}
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
