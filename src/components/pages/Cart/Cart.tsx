import "./cart.scss";
import UserCart from "../../organisms/UserCart/UserCart";
import Wrapper from "../../atoms/Wrapper/Wrapper";

const Cart = () => {
  return (
    <Wrapper id={"cart"}>
      <UserCart />
    </Wrapper>
  );
};
export default Cart;
