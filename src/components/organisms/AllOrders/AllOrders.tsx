import "./all-orders.scss";
import useOrder from "../../../hooks/useOrder";
import { useEffect } from "react";
import Subheading from "../../atoms/Subheading/Subheading";
import AppError from "../../molecules/AppError/AppError";
import Loader from "../../atoms/Loader/Loader";
import Text from "../../atoms/Text/Text";
import Order from "../../molecules/Order/Order";

const AllOrders = () => {
  const { orders, isLoading, error, getAllOrders } = useOrder();

  useEffect(() => {
    getAllOrders();
    // eslint-disable-next-line
  }, []);

  if (error) return <AppError error={error} />;

  return (
    <div id={"all-orders"}>
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
export default AllOrders;
