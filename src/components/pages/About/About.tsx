import "./about.scss";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import Text from "../../atoms/Text/Text";
import Subheading from "../../atoms/Subheading/Subheading";
import { subheadingSize, textSize } from "../../../enums/typography";
import { Divider } from "@mui/material";
import ValuesBanner from "../../organisms/ValuesBanner/ValuesBanner";

// TODO: Add order/returns policies, methods of payment

const About = () => {
  return (
    <Wrapper id={"about"}>
      <div className={"about-values"}>
        <div className={"values-text"}>
          <Subheading size={subheadingSize.SMALL}>OUR VALUES</Subheading>
          <Divider></Divider>
          <Text size={textSize.LARGE}>
            Welcome to our skiwear e-commerce site! We are a team of passionate
            skiers and outdoor enthusiasts who are dedicated to providing
            high-quality ski gear and apparel at affordable prices.
          </Text>
          <Text size={textSize.LARGE}>
            Our mission is simple: to make it easy for skiers of all levels to
            access the best gear and apparel on the market. Whether you're a
            seasoned pro or just starting out, we have something for everyone.
          </Text>
          <Text size={textSize.LARGE}>
            We offer a wide range of products, including ski jackets, pants,
            gloves, helmets, goggles, and more. All of our products are
            carefully selected to ensure that they meet the highest standards of
            quality and performance.
          </Text>
          <Text size={textSize.LARGE}>
            In addition to our top-notch products, we also offer exceptional
            customer service. Our team is always here to help you find the
            perfect gear for your needs and answer any questions you may have.
          </Text>
          <Text size={textSize.LARGE}>
            Thank you for choosing us for all of your ski gear and apparel
            needs. We hope to see you on the slopes soon!
          </Text>
        </div>
      </div>
      <ValuesBanner />
      <div className={"about-story"}>
        <div className={"story-text"}>
          <Subheading size={subheadingSize.SMALL} padding={"0"}>
            WHERE IT ALL BEGAN
          </Subheading>
          <Divider></Divider>
          <Text size={textSize.LARGE}>
            In 2014 we made the decision to go all in and founded Ecommerce
            Adventure Research Institute (EARI). EARI is a non-profit and
            non-profit-funded research and education organization dedicated to
            enhancing the quality of life through increased public awareness of
            the natural environment, recreation, conservation, education,
            research and humanitarian service. Our mission is to lead in
            providing high-quality, professional, scientific and practical
            leadership in critical natural resource management, outdoor
            education, youth services, public safety and research and training.
          </Text>
          <Text size={textSize.LARGE}>
            EARI offers a variety of educational and professional programs and
            events, but our flagship program is its flagship course, the Winter
            Recon curriculum (www.winterrecon.com). The Winter Recon courses are
            designed to integrate STEM and STEAM concepts with a variety of
            sports and disciplines that will challenge and interest participants
            from various disciplines. Our courses are taught by experts in a
            variety of fields including expedition ski guide, running coach,
            mountain guide, ski mountaineering and mountain climbing guide,
            backcountry ski instructor, teaching professional, nutritionist,
            biathlete and heli-ski guide.
          </Text>
          <Text size={textSize.LARGE}>
            EARI’s Winter Recon courses are customized for your personal
            wellness, motivation, and competitive spirit. They can be customized
            to your training, your aspirations and your family’s needs. There
            are specialized training options available for individuals, groups
            and teams. More than just a learning experience, it is the
            combination of learning and adventure that we strive for. The Winter
            Recon curriculum focuses on the importance of becoming aware of
            one’s strengths and weaknesses, as well as what conditions best
            promote a more active lifestyle.
          </Text>
        </div>
      </div>
      <div className={"about-sustainability"}>
        <div className={"sustainability-text"}>
          <Subheading size={subheadingSize.SMALL}>SUSTAINABILITY</Subheading>
          <Divider></Divider>
          <Text size={textSize.LARGE}>
            At Ecommerce, we are committed to sustainability and doing our part
            to protect the environment. We understand the impact that the ski
            industry can have on the planet and strive to minimize our
            environmental footprint.
          </Text>
          <Text size={textSize.LARGE}>
            Here are a few ways that we are working towards sustainability:
            <ul>
              <li>
                Partnering with brands that prioritize sustainability: We only
                partner with brands that are committed to sustainable practices
                in their production and sourcing processes.
              </li>
              <li>
                Offering eco-friendly options: We offer a range of ski gear and
                apparel made from sustainable materials, such as recycled
                polyester and organic cotton.
              </li>
              <li>
                Reducing our waste: We work to minimize waste in all aspects of
                our business, from packaging to shipping.
              </li>
              <li>
                Educating our customers: We believe in the power of education
                and strive to inform our customers about the importance of
                sustainability in the ski industry.
              </li>
            </ul>
          </Text>
          <Text size={textSize.LARGE}>
            We are constantly working to improve our sustainability practices
            and welcome any feedback or suggestions from our customers.
            Together, we can make a positive impact on the planet.
          </Text>
        </div>
      </div>
    </Wrapper>
  );
};
export default About;
