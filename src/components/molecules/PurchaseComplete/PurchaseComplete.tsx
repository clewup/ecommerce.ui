import "./purchase-complete.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import { IOrder } from "../../../interfaces/IOrder";
import Loader from "../../atoms/Loader/Loader";
import Order from "../Order/Order";
import React from "react";

interface IProps {
  order: IOrder | undefined;
  isLoading: boolean;
}

const PurchaseComplete: React.FC<IProps> = ({ order, isLoading }) => {
  return (
    <div id={"purchase-complete"}>
      {isLoading || !order ? (
        <Loader />
      ) : (
        <>
          <Subheading align={"center"} padding={"0rem"} margin={"0 0 2rem 0"}>
            Your order is complete!
          </Subheading>
          <Order order={order} />
        </>
      )}
    </div>
  );
};
export default PurchaseComplete;
