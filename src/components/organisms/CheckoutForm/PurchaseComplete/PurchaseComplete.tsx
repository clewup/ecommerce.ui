import "./purchase-complete.scss";
import Subheading from "../../../atoms/Subheading/Subheading";
import { IOrder } from "../../../../types/IOrder";
import OrderProduct from "../../../molecules/OrderProduct/OrderProduct";
import Loader from "../../../atoms/Loader/Loader";
import Text from "../../../atoms/Text/Text";

interface IProps {
  order: IOrder;
  isLoading: boolean;
}

const PurchaseComplete: React.FC<IProps> = ({ order, isLoading }) => {
  return (
    <div id={"purchase-complete"}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Subheading>Your order is complete!</Subheading>
          <Text className={"order-details"}>{String(order.id)}</Text>
          <div className={"order-cart-items"}>
            {order?.cart?.products.map((orderProduct) => {
              return (
                <div key={String(orderProduct.id)}>
                  <OrderProduct orderProduct={orderProduct} />
                </div>
              );
            })}
            <Text className={"order-total"}>
              £{order?.cart?.total.toFixed(2)}
            </Text>
          </div>
        </>
      )}
    </div>
  );
};
export default PurchaseComplete;
