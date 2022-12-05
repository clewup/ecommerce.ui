import "./cart.scss";
import Checkout from "../../organisms/Checkout/Checkout";
import CartItems from "../../organisms/CartItems/CartItems";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/Auth";
import { UserContext } from "../../../contexts/User";

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated && !user) navigate("/login");
    // eslint-disable-next-line
  }, []);

  return (
    <div id={"cart"}>
      <CartItems />
      <Checkout />
    </div>
  );
};
export default Cart;
