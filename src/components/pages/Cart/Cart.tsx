import "./cart.scss";
import CartProducts from "../../organisms/CartProducts/CartProducts";
import Wrapper from "../../atoms/Wrapper/Wrapper";

const Cart = () => {
  return (
    <Wrapper id={"cart"}>
      <CartProducts />
    </Wrapper>
  );
};
export default Cart;
