import "./cart.scss";
import Checkout from "../../organisms/Checkout/Checkout";
import CartItems from "../../organisms/CartItems/CartItems";

const Cart = () => {
  return (
    <div id={"cart"}>
      <CartItems />
      <Checkout />
    </div>
  );
};
export default Cart;
