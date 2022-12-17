import "./cart.scss";
import CartProducts from "../../organisms/CartProducts/CartProducts";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/Auth";
import Wrapper from "../../atoms/Wrapper/Wrapper";

const Cart = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper id={"cart"}>
      <CartProducts />
    </Wrapper>
  );
};
export default Cart;
