import "./header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth";

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div id={"header"}>
      <div className={"header-group"}>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"store"}>
          <p>Store</p>
        </Link>
        <Link to={"trending"}>
          <p>Trending</p>
        </Link>
      </div>
      <div className={"header-group"}>
        {!isAuthenticated ? (
          <Link to={"login"}>
            <p>Login</p>
          </Link>
        ) : (
          <Link to={"account"}>
            <p>Account</p>
          </Link>
        )}
        <Link to={"cart"}>
          <p>Basket</p>
        </Link>
      </div>
    </div>
  );
};
export default Header;
