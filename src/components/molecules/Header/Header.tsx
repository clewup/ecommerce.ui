import "./header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth";
import { roles } from "../../../enums/roles";

const Header = () => {
  const { isAuthenticated, role } = useContext(AuthContext);

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
        {role && (role === roles.DEVELOPER || role === roles.EMPLOYEE) && (
          <Link to={"admin"}>
            <p>Admin</p>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
