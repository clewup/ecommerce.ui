import "./cart-items.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import CartItem from "../../molecules/CartItem/CartItem";

const CartItems = () => {
  return (
    <div id={"cart-items"}>
      <Subheading>Cart</Subheading>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};
export default CartItems;
