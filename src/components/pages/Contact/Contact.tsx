import "./contact.scss";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Subheading from "../../atoms/Subheading/Subheading";
import { subheadingSize } from "../../../enums/typography";

const Contact = () => {
  return (
    <Wrapper id={"contact"}>
      <div className={"contact-email"}>
        <div className={"email-icon"}>
          <MailOutlineIcon fontSize={"inherit"} />
        </div>
        <div className={"email-text"}>
          <Subheading size={subheadingSize.LARGE}>
            ecommerce@ecommerce.co.uk
          </Subheading>
        </div>
      </div>
      <div className={"contact-telephone"}>
        <div className={"telephone-icon"}>
          <PhoneInTalkIcon fontSize={"inherit"} />
        </div>
        <div className={"telephone-text"}>
          <Subheading size={subheadingSize.LARGE}>UK +12 345678910</Subheading>
          <Subheading size={subheadingSize.LARGE}>EU +10 987654321</Subheading>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;
