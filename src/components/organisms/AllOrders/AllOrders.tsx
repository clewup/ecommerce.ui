import "./all-orders.scss";
import useOrder from "../../../hooks/useOrder";
import { useEffect } from "react";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import OrderItem from "../../molecules/OrderItem/OrderItem";
import Loader from "../../atoms/Loader/Loader";
import AppError from "../../molecules/AppError/AppError";

const AllOrders = () => {
  const { orders, isLoading, error, getAllOrders } = useOrder();

  useEffect(() => {
    getAllOrders();
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <AppError error={error} />;

  return (
    <div id={"all-orders"}>
      <Subheading size={subheadingSize.SMALL}>Orders</Subheading>
      <div className={"orders"}>
        {orders.map((order) => {
          return (
            <div className={`order order-${order.id}`}>
              <div className={"order-info"}>
                <p className={"order-id"}>{order.id!.toString()}</p>
                <p>{new Date(order.orderDate).toDateString()}</p>
                <p>Total: £{order.cart.total}</p>
              </div>
              {order.cart.products.map((orderItem) => {
                return (
                  <div className={"order-items"}>
                    <OrderItem orderItem={orderItem} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AllOrders;
