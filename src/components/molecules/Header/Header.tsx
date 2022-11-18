import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
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
        <p>Account</p>
        <p>Login</p>
      </div>
    </div>
  );
};
export default Header;
