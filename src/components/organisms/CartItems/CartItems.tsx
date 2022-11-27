import "./cart-items.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import CartItem from "../../molecules/CartItem/CartItem";
import useCart from "../../../hooks/useCart";
import { ICartItem } from "../../../types/ICartItem";

const CartItems = () => {
  const { cart } = useCart();

  return (
    <div id={"cart-items"}>
      <Subheading>Cart</Subheading>
      {cart?.cartItems.map((cartItem: ICartItem) => {
        return <CartItem cartItem={cartItem} key={cartItem.name} />;
      })}
      <div className={"cart-total"}>
        Cart Total: £{cart?.total.toFixed(2) || "0"}
      </div>
    </div>
  );
};
export default CartItems;
