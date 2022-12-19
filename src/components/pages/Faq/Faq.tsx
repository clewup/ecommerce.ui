import "./faq.scss";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";

const Faq = () => {
  return (
    <Wrapper id={"faq"}>
      <div className={"faq-banner"}>
        <Subheading size={subheadingSize.SMALL}>
          FREQUENTLY ASKED QUESTIONS
        </Subheading>
      </div>
      <div className={"faq-categories"}>
        <div className={"faq-tile"}>
          <Subheading>ORDERS</Subheading>
        </div>
        <div className={"faq-tile"}>
          <Subheading>RETURNS</Subheading>
        </div>
        <div className={"faq-tile"}>
          <Subheading>ACCOUNT</Subheading>
        </div>
        <div className={"faq-tile"}>
          <Subheading>ACCOUNT</Subheading>
        </div>
      </div>
      <div className={"faq-unanswered"}>
        <Subheading size={subheadingSize.SMALL}>STILL NEED HELP?</Subheading>
        <div className={"faq-contact-methods"}>
          <div className={"faq-tile"}>
            <Subheading>PHONE</Subheading>
          </div>
          <div className={"faq-tile"}>
            <Subheading>EMAIL</Subheading>
          </div>
          <div className={"faq-tile"}>
            <Subheading>CHAT</Subheading>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Faq;
