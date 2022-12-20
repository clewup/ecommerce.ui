import "./about.scss";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import Text from "../../atoms/Text/Text";
import Subheading from "../../atoms/Subheading/Subheading";
import { subheadingSize, textSize } from "../../../enums/typography";

// TODO: Add order/returns policies, methods of payment

const About = () => {
  return (
    <Wrapper id={"about"}>
      <div className={"about-story"}>
        <div className={"story-text"}>
          <Subheading size={subheadingSize.SMALL}>
            WHERE IT ALL BEGAN
          </Subheading>
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
        <div className={"story-image"}></div>
      </div>
    </Wrapper>
  );
};
export default About;
