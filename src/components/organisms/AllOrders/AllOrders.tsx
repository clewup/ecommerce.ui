import "./all-orders.scss";
import useOrder from "../../../hooks/useOrder";
import { useEffect } from "react";
import Subheading from "../../atoms/Subheading/Subheading";
import OrderProduct from "../../molecules/OrderProduct/OrderProduct";
import AppError from "../../molecules/AppError/AppError";
import Loader from "../../atoms/Loader/Loader";
import Text from "../../atoms/Text/Text";
import { subheadingSize } from "../../../enums/typography";

const AllOrders = () => {
  const { orders, isLoading, error, getAllOrders } = useOrder();

  useEffect(() => {
    getAllOrders();
    // eslint-disable-next-line
  }, []);

  if (error) return <AppError error={error} />;

  return (
    <div id={"all-orders"}>
      <Subheading size={subheadingSize.SMALL}>Orders</Subheading>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={"orders"}>
          {orders.map((order) => {
            return (
              <div className={`order order-${order.id}`}>
                <div className={"order-info"}>
                  <Text className={"order-id"}>{String(order.id)}</Text>
                  <Text>{new Date(order.orderDate).toDateString()}</Text>
                  <Text>Total: £{order.cart.total}</Text>
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
export default AllOrders;
