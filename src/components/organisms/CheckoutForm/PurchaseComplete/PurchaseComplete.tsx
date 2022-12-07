import Subheading, {
  subheadingSize,
} from "../../../atoms/Subheading/Subheading";
import { IOrder } from "../../../../types/IOrder";

interface IProps {
  order: IOrder | null;
}

const PurchaseComplete: React.FC<IProps> = ({ order }) => {
  return (
    <>
      <Subheading size={subheadingSize.MEDIUM}>
        Your order is complete!
      </Subheading>
      <p className={"order-details"}>{order?.id.toString()}</p>
    </>
  );
};
export default PurchaseComplete;
