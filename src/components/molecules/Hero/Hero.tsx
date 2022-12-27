import "./hero.scss";
import Heading from "../../atoms/Heading/Heading";
import React from "react";
import Subheading from "../../atoms/Subheading/Subheading";
import { subheadingSize } from "../../../enums/typography";
import { colors } from "../../../styles/colors";

const Hero = () => {
  return (
    <div id={"hero"}>
      <div className={"hero-text"}>
        <Subheading size={subheadingSize.SMALL}>Welcome To</Subheading>
        <Heading color={colors.BLUE}>Ecommerce</Heading>
      </div>
    </div>
  );
};
export default Hero;
