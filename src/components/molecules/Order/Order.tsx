import "./order.scss";
import Text from "../../atoms/Text/Text";
import OrderProduct from "../OrderProduct/OrderProduct";
import { IOrder } from "../../../interfaces/IOrder";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import useShipping from "../../../hooks/useShipping";
import Loader from "../../atoms/Loader/Loader";
import Modal from "../../atoms/Modal/Modal";

interface IProps {
  order: IOrder;
}

const Order: React.FC<IProps> = ({ order }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { trackingInformation, trackOrder } = useShipping();

  const handleOpen = () => {
    setModalOpen(true);

    if (order.trackingNumber) {
      trackOrder(order.trackingNumber);
    }
  };
  const handleClose = () => setModalOpen(false);

  return (
    <div id={`order`}>
      <div className={"order-info"}>
        <Text className={"order-id"}>{String(order.id)}</Text>
        <Text>{new Date(order.orderDate).toLocaleDateString()}</Text>
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
        color={"_black"}
        onClick={handleOpen}
        disabled={!order.trackingNumber}
      >
        TRACK
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <>
          <div>
            <Text className={"order-id"}>ID: {order.id}</Text>
            <Text>
              {order.firstName} {order.lastName}
            </Text>
            <Text>{order.email}</Text>
          </div>
          <div>
            <Text>{order.deliveryAddress?.lineOne}</Text>
            <Text>{order.deliveryAddress?.lineTwo}</Text>
            <Text>{order.deliveryAddress?.lineThree}</Text>
            <Text>{order.deliveryAddress?.postcode}</Text>
            <Text>{order.deliveryAddress?.city}</Text>
            <Text>{order.deliveryAddress?.county}</Text>
            <Text>{order.deliveryAddress?.country}</Text>
          </div>
          <div>
            {!trackingInformation ? (
              <Loader />
            ) : (
              <>
                <Text className={"tracking-number"}>
                  {trackingInformation && trackingInformation.trackingNumber}
                </Text>
                <Text>
                  Shipped:{" "}
                  {trackingInformation &&
                    new Date(
                      trackingInformation.shippedDate
                    ).toLocaleDateString()}
                </Text>
                <Text>
                  Estimated Arrival:{" "}
                  {trackingInformation &&
                    new Date(
                      trackingInformation.arrivalDate
                    ).toLocaleDateString()}
                </Text>
              </>
            )}
          </div>
        </>
      </Modal>
    </div>
  );
};
export default Order;
