import "./checkout.scss";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import CheckoutForm from "../../organisms/CheckoutForm/CheckoutForm";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/User";
import { AuthContext } from "../../../contexts/Auth";

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated && !user) navigate("/login");
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper id={"checkout"}>
      <CheckoutForm />
    </Wrapper>
  );
};
export default Checkout;
