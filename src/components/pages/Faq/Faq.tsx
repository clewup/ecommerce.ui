import "./faq.scss";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import Subheading from "../../atoms/Subheading/Subheading";
import { subheadingSize, textSize } from "../../../enums/typography";
import Text from "../../atoms/Text/Text";

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
      <div className={"faq-questions"}>
        <div className={"questions-half"}>
          <div className={"questions-question"}>
            <Text size={textSize.XLARGE} className={"question"}>
              What types of ski gear and apparel do you offer?
            </Text>
            <Text size={textSize.LARGE}>
              We offer a wide range of ski gear and apparel, including ski
              jackets, pants, gloves, helmets, goggles, and more.
            </Text>
          </div>
          <div className={"questions-question"}>
            <Text size={textSize.XLARGE} className={"question"}>
              Do you offer products for skiers of all levels?
            </Text>
            <Text size={textSize.LARGE}>
              Yes, we have something for skiers of all levels, from beginner to
              expert.
            </Text>
          </div>
          <div className={"questions-question"}>
            <Text size={textSize.XLARGE} className={"question"}>
              Can I return or exchange a product if I am not satisfied with it?
            </Text>
            <Text size={textSize.LARGE}>
              Yes, we offer a return and exchange policy for products that are
              in new, unused condition. Please refer to our return policy for
              more information.
            </Text>
          </div>
        </div>
        <div className={"questions-half"}>
          <div className={"questions-question"}>
            <Text size={textSize.XLARGE} className={"question"}>
              Do you offer international shipping?
            </Text>
            <Text size={textSize.LARGE}>
              Yes, we offer international shipping to many countries. Please
              refer to our shipping policy for more information.
            </Text>
          </div>
          <div className={"questions-question"}>
            <Text size={textSize.XLARGE} className={"question"}>
              How can I contact customer service?
            </Text>
            <Text size={textSize.LARGE}>
              You can contact our customer service team via email or phone. Our
              contact information can be found on our website.
            </Text>
          </div>
          <div className={"questions-question"}>
            <Text size={textSize.XLARGE} className={"question"}>
              Do you offer bulk discounts for ski clubs or large groups?
            </Text>
            <Text size={textSize.LARGE}>
              Yes, we offer bulk discounts for ski clubs and large groups.
              Please contact our customer service team for more information.
            </Text>
          </div>
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
