import "./cart-item.scss";
import { ICartItem } from "../../../types/ICartItem";

interface IProps {
  cartItem: ICartItem;
}

const CartItem: React.FC<IProps> = ({ cartItem }) => {
  return (
    <div id={"cart-item"}>
      <div className={"cart-item-image"}>
        <img
          src={
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          alt={cartItem.name}
        />
      </div>
      <div className={"cart-item-info"}>
        <p>{cartItem.name}</p>
        <p>{cartItem.variant}</p>
        <p>
          {cartItem.quantity} - £{cartItem.quantity * cartItem.pricePerUnit}
        </p>
      </div>
    </div>
  );
};
export default CartItem;
