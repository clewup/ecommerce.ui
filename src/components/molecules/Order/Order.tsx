import "./order.scss";
import Text from "../../atoms/Text/Text";
import OrderProduct from "../OrderProduct/OrderProduct";
import { IOrder } from "../../../interfaces/IOrder";
import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";

interface IProps {
  order: IOrder;
}

const Order: React.FC<IProps> = ({ order }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);

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
        onClick={handleOpen}
        disabled={!order.trackingNumber}
      >
        TRACK
      </Button>

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={"order-tracking-modal"}>
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
            <Text>TRACKING INFO...</Text>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default Order;
