import "./purchase-complete.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import { IOrder } from "../../../interfaces/IOrder";
import OrderProduct from "../OrderProduct/OrderProduct";
import Loader from "../../atoms/Loader/Loader";
import Text from "../../atoms/Text/Text";

interface IProps {
  order: IOrder | undefined;
  isLoading: boolean;
}

const PurchaseComplete: React.FC<IProps> = ({ order, isLoading }) => {
  return (
    <div id={"purchase-complete"}>
      {isLoading || !order ? (
        <Loader />
      ) : (
        <>
          <Subheading align={"center"}>Your order is complete!</Subheading>
          <Text className={"order-details"}>{String(order.id)}</Text>
          <div className={"order-cart-items"}>
            {order?.products.map((orderProduct) => {
              return (
                <div key={String(orderProduct.id)}>
                  <OrderProduct orderProduct={orderProduct} />
                </div>
              );
            })}
            <Text className={"order-total"}>£{order?.total}</Text>
          </div>
        </>
      )}
    </div>
  );
};
export default PurchaseComplete;
