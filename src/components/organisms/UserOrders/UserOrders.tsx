import "./user-orders.scss";
import useOrder from "../../../hooks/useOrder";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/User";
import AppError from "../../molecules/AppError/AppError";
import Loader from "../../atoms/Loader/Loader";
import Text from "../../atoms/Text/Text";
import Order from "../../molecules/Order/Order";
import { IOrder } from "../../../types/IOrder";
import InfiniteScroll from "react-infinite-scroll-component";

const UserOrders = () => {
  const { orders, isLoading, error, getUserOrders } = useOrder();
  const { user } = useContext(UserContext);

  const defaultPagedAmount = 4;
  const [pagedOrders, setPagedOrders] = useState<IOrder[]>([]);
  const [pagedAmount, setPagedAmount] = useState(defaultPagedAmount);

  useEffect(() => {
    if (user) {
      getUserOrders(user.id);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setPagedOrders(orders.slice(0, pagedAmount));
  }, [orders, pagedAmount]);

  const loadMore = () => {
    setPagedAmount(pagedAmount + defaultPagedAmount);
  };

  if (error) return <AppError error={error} />;

  return (
    <div id={"user-orders"}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {!orders.length && !isLoading && <Text>No orders found.</Text>}

          <InfiniteScroll
            next={loadMore}
            hasMore={pagedOrders.length < orders.length}
            loader={null}
            dataLength={pagedOrders.length}
            scrollThreshold={0.6}
            className={"orders"}
          >
            {pagedOrders.map((order) => {
              return (
                <div key={String(order.id)}>
                  <Order order={order} />
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
};
export default UserOrders;
