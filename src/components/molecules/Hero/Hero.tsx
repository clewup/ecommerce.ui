import "./hero.scss";
import Heading from "../../atoms/Heading/Heading";
import React from "react";
import Subheading from "../../atoms/Subheading/Subheading";
import { fontColor, subheadingSize } from "../../../enums/typography";

const Hero = () => {
  return (
    <div id={"hero"}>
      <div className={"hero-text"}>
        <Subheading size={subheadingSize.SMALL}>Welcome To</Subheading>
        <Heading color={fontColor.BLUE}>Ecommerce</Heading>
      </div>
    </div>
  );
};
export default Hero;
