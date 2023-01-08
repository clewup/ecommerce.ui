import "./purchase-complete.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import { IOrder } from "../../../interfaces/IOrder";
import OrderProduct from "../OrderProduct/OrderProduct";
import Loader from "../../atoms/Loader/Loader";
import Text from "../../atoms/Text/Text";
import Order from "../Order/Order";

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
          <Order order={order} />
        </>
      )}
    </div>
  );
};
export default PurchaseComplete;
