import "./footer.scss";
import Text from "../../atoms/Text/Text";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import { useNavigate } from "react-router-dom";
import { fontPadding } from "../../../enums/fonts";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div id={"footer"}>
      <div className={"footer-group"}>
        <Subheading size={subheadingSize.SMALL} padding={fontPadding.NONE}>
          Help and Information
        </Subheading>
        <Text onClick={() => navigate("account")}>Your orders</Text>
        <Text onClick={() => navigate("faq")}>Returns</Text>
        <Text onClick={() => navigate("about-us")}>Promotions</Text>
      </div>
      <div className={"footer-group"}>
        <Subheading size={subheadingSize.SMALL} padding={fontPadding.NONE}>
          About Ecommerce
        </Subheading>
        <Text onClick={() => navigate("about-us")}>About us</Text>
        <Text onClick={() => navigate("about-us")}>Conservation efforts</Text>
      </div>
      <div className={"footer-group"}>
        <Subheading size={subheadingSize.SMALL} padding={fontPadding.NONE}>
          More from Ecommerce
        </Subheading>
        <Text>Gift vouchers</Text>
      </div>
    </div>
  );
};
export default Footer;
