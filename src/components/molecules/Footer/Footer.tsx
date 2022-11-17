import "./footer.scss";

const Footer = () => {
  return (
    <div id={"footer"}>
      <div className={"footer-group"}>
        <h3>Help and Information</h3>
        <p>Track your order</p>
        <p>Returns</p>
        <p>Promotions</p>
      </div>
      <div className={"footer-group"}>
        <h3>About Ecommerce</h3>
        <p>About us</p>
        <p>Conservation efforts</p>
      </div>
      <div className={"footer-group"}>
        <h3>More from Ecommerce</h3>
        <p>Gift vouchers</p>
      </div>
    </div>
  );
};
export default Footer;
