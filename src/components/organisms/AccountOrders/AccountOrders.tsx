import "./account-orders.scss";
import useOrder from "../../../hooks/useOrder";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/User";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import OrderItem from "../../molecules/OrderItem/OrderItem";
import Loader from "../../atoms/Loader/Loader";
import ErrorMessage from "../../molecules/ErrorMessage/ErrorMessage";

const AccountOrders = () => {
  const { orders, isLoading, error, getUserOrders } = useOrder();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      getUserOrders(user.id);
    }
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div id={"account-orders"}>
      <Subheading size={subheadingSize.SMALL}>Your Orders</Subheading>
      <div className={"orders"}>
        {orders.map((order) => {
          return (
            <div className={`order order-${order.id}`}>
              <div className={"order-info"}>
                <p className={"order-id"}>{order.id!.toString()}</p>
                <p>{new Date(order.orderDate).toDateString()}</p>
                <p>Total: {order.cart.total}</p>
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
export default AccountOrders;
