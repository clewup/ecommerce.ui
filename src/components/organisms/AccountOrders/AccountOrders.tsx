import "./account-orders.scss";
import useOrder from "../../../hooks/useOrder";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/User";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import OrderProduct from "../../molecules/OrderProduct/OrderProduct";
import AppError from "../../molecules/AppError/AppError";
import Loader from "../../atoms/Loader/Loader";

const AccountOrders = () => {
  const { orders, isLoading, error, getUserOrders } = useOrder();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      getUserOrders(user.id);
    }
    // eslint-disable-next-line
  }, []);

  if (error) return <AppError error={error} />;

  return (
    <div id={"account-orders"}>
      <Subheading size={subheadingSize.SMALL}>Your Orders</Subheading>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={"orders"}>
          {orders.map((order) => {
            return (
              <div className={`order order-${order.id}`}>
                <div className={"order-info"}>
                  <p className={"order-id"}>{String(order.id)}</p>
                  <p>{new Date(order.orderDate).toDateString()}</p>
                  <p>Total: £{order.cart.total}</p>
                </div>
                <div className={"order-products"}>
                  {order.cart.products.map((orderProduct) => {
                    return (
                      <div key={String(orderProduct.id)}>
                        <OrderProduct orderProduct={orderProduct} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default AccountOrders;
