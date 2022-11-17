import "./header.scss";

const Header = () => {
  return (
    <div id={"header"}>
      <div className={"header-group"}>
        <p>Home</p>
        <p>Store</p>
        <p>Trending</p>
      </div>
      <div className={"header-group"}>
        <p>Account</p>
        <p>Login</p>
      </div>
    </div>
  );
};
export default Header;
