import React from "react";
import "./heading.scss";
import classnames from "classnames";

interface IProps {
  children: any;
  color?: string;
}

export const headingColor = {
  WHITE: "heading-white",
  BLUE: "heading-blue",
};

const Heading: React.FC<IProps> = ({ children, color }) => {
  return <h3 className={classnames("heading", color)}>{children}</h3>;
};
export default Heading;
