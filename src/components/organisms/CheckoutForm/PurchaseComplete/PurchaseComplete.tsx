import "./purchase-complete.scss";
import Subheading, {
  subheadingSize,
} from "../../../atoms/Subheading/Subheading";
import { IOrder } from "../../../../types/IOrder";
import OrderProduct from "../../../molecules/OrderProduct/OrderProduct";
import Loader from "../../../atoms/Loader/Loader";

interface IProps {
  order: IOrder | null;
  isLoading: boolean;
}

const PurchaseComplete: React.FC<IProps> = ({ order, isLoading }) => {
  if (!order || !order.id || isLoading) return <Loader />;

  return (
    <div id={"purchase-complete"}>
      <Subheading size={subheadingSize.MEDIUM}>
        Your order is complete!
      </Subheading>
      <p className={"order-details"}>{String(order.id)}</p>
      <div className={"order-cart-items"}>
        {order?.cart.products.map((orderProduct) => {
          return (
            <div key={String(orderProduct.id)}>
              <OrderProduct orderProduct={orderProduct} />
            </div>
          );
        })}
        <p className={"order-total"}>£{order?.cart.total}</p>
      </div>
    </div>
  );
};
export default PurchaseComplete;
