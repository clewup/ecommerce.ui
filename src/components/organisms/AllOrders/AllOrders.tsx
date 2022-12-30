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

const AllOrders = () => {
  const { orders, isLoading, error, getAllOrders } = useOrder();

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getAllOrders();
    // eslint-disable-next-line
  }, []);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

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
                <div key={String(order.id)}>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{String(order.id)}</TableCell>
                    <TableCell>{String(order.userId)}</TableCell>
                    <TableCell>£{order.cart.total}</TableCell>
                    <TableCell>
                      {new Date(order.orderDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Button onClick={handleOpen}>VIEW</Button>
                    </TableCell>
                  </TableRow>

                  <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box className={"order-details-modal"}>
                      <div>
                        <Text className={"order-id"}>ID: {order.id}</Text>
                        <Text>User ID: {order.userId}</Text>
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
                        {order.cart.products.map((orderProduct) => {
                          return (
                            <div key={String(orderProduct.id)}>
                              <OrderProduct orderProduct={orderProduct} />
                            </div>
                          );
                        })}
                      </div>
                    </Box>
                  </Modal>
                </div>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
export default AllOrders;
