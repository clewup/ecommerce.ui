import "./footer.scss";
import Text from "../../atoms/Text/Text";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";

const Footer = () => {
  return (
    <div id={"footer"}>
      <div className={"footer-group"}>
        <Subheading size={subheadingSize.SMALL}>
          Help and Information
        </Subheading>
        <Text>Track your order</Text>
        <Text>Returns</Text>
        <Text>Promotions</Text>
      </div>
      <div className={"footer-group"}>
        <Subheading size={subheadingSize.SMALL}>About Ecommerce</Subheading>
        <Text>About us</Text>
        <Text>Conservation efforts</Text>
      </div>
      <div className={"footer-group"}>
        <Subheading size={subheadingSize.SMALL}>More from Ecommerce</Subheading>
        <Text>Gift vouchers</Text>
      </div>
    </div>
  );
};
export default Footer;
