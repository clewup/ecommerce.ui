import "./hero.scss";
import Heading, { headingColor } from "../../atoms/Heading/Heading";
import React from "react";
import Subheading, {
  subheadingColor,
  subheadingSize,
} from "../../atoms/Subheading/Subheading";

const Hero = () => {
  return (
    <div id={"hero"}>
      <div className={"hero-text"}>
        <Subheading size={subheadingSize.SMALL} color={subheadingColor.WHITE}>
          Welcome To
        </Subheading>
        <Heading color={headingColor.WHITE}>Ecommerce</Heading>
      </div>
    </div>
  );
};
export default Hero;
