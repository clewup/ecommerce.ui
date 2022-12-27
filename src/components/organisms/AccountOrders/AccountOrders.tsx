import "./account-orders.scss";
import useOrder from "../../../hooks/useOrder";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/User";
import AppError from "../../molecules/AppError/AppError";
import Loader from "../../atoms/Loader/Loader";
import Text from "../../atoms/Text/Text";
import Order from "../../molecules/Order/Order";

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
      {isLoading ? (
        <Loader />
      ) : (
        <div className={"orders"}>
          {!orders.length && !isLoading && <Text>No orders found.</Text>}

          {orders.map((order) => {
            return (
              <div key={String(order.id)}>
                <Order order={order} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default AccountOrders;
