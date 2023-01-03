import "./order.scss";
import Text from "../../atoms/Text/Text";
import OrderProduct from "../OrderProduct/OrderProduct";
import { IOrder } from "../../../types/IOrder";
import React from "react";
import { Button } from "@mui/material";

interface IProps {
  order: IOrder;
}

const Order: React.FC<IProps> = ({ order }) => {
  return (
    <div id={`order`}>
      <div className={"order-info"}>
        <Text className={"order-id"}>{String(order.id)}</Text>
        <Text>{new Date(order.orderDate).toDateString()}</Text>
        <Text>Total: £{order.total}</Text>
      </div>
      <div className={"order-products"}>
        {order.products.map((orderProduct) => {
          return (
            <div key={String(orderProduct.id)}>
              <OrderProduct orderProduct={orderProduct} />
            </div>
          );
        })}
      </div>
      <Button
        size={"large"}
        type={"button"}
        variant={"contained"}
        color={"success"}
      >
        TRACK
      </Button>
    </div>
  );
};
export default Order;
