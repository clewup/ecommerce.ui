import "./all-orders.scss";
import useOrder from "../../../hooks/useOrder";
import React, { useEffect, useState } from "react";
import AppError from "../../molecules/AppError/AppError";
import Loader from "../../atoms/Loader/Loader";
import Text from "../../atoms/Text/Text";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  Box,
  Button,
} from "@mui/material";
import OrderProduct from "../../molecules/OrderProduct/OrderProduct";
import { IOrder } from "../../../interfaces/IOrder";
import useShipping from "../../../hooks/useShipping";

const AllOrders = () => {
  const { orders, isLoading, error, getAllOrders } = useOrder();
  const { trackingInformation, trackOrder, shipOrder } = useShipping();

  const [openModal, setOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<IOrder>();

  useEffect(() => {
    getAllOrders();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (selectedOrder?.trackingNumber) {
      trackOrder(selectedOrder.trackingNumber);
    }
    // eslint-disable-next-line
  }, [selectedOrder]);

  const handleOpen = (order: IOrder) => {
    setSelectedOrder(order);
    setOpenModal(true);
  };
  const handleClose = () => {
    setSelectedOrder(undefined);
    setOpenModal(false);
  };

  if (error) return <AppError error={error} />;

  return (
    <div id={"all-orders"}>
      {isLoading ? (
        <Loader />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Date</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={String(order.id)}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{String(order.id)}</TableCell>
                  <TableCell>{String(order.userId)}</TableCell>
                  <TableCell>£{order.total}</TableCell>
                  <TableCell>
                    {new Date(order.orderDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        handleOpen(order);
                      }}
                    >
                      VIEW
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={"order-details-modal"}>
          <div>
            <Text className={"order-id"}>ID: {selectedOrder?.id}</Text>
            <Text>User ID: {selectedOrder?.userId}</Text>
            <Text>
              {selectedOrder?.firstName} {selectedOrder?.lastName}
            </Text>
            <Text>{selectedOrder?.email}</Text>
          </div>
          <div>
            <Text>{selectedOrder?.deliveryAddress?.lineOne}</Text>
            <Text>{selectedOrder?.deliveryAddress?.lineTwo}</Text>
            <Text>{selectedOrder?.deliveryAddress?.lineThree}</Text>
            <Text>{selectedOrder?.deliveryAddress?.postcode}</Text>
            <Text>{selectedOrder?.deliveryAddress?.city}</Text>
            <Text>{selectedOrder?.deliveryAddress?.county}</Text>
            <Text>{selectedOrder?.deliveryAddress?.country}</Text>
          </div>
          <div className={"order-products"}>
            {selectedOrder?.products.map((orderProduct) => {
              return (
                <div key={String(orderProduct.id)}>
                  <OrderProduct orderProduct={orderProduct} />
                </div>
              );
            })}
          </div>
          {!selectedOrder?.trackingNumber || !trackingInformation ? (
            <Button
              size={"large"}
              type={"button"}
              variant={"contained"}
              color={"_black"}
              onClick={() => shipOrder(selectedOrder!)}
            >
              Ship Order
            </Button>
          ) : (
            <div className={"tracking-information"}>
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
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};
export default AllOrders;
