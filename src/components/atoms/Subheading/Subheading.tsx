import React from "react";
import "./subheading.scss";
import classnames from "classnames";

interface IProps {
  children: any;
  size: string;
  color?: string;
}

export const subheadingSize = {
  SMALL: "subheading-small",
  MEDIUM: "subheading-medium",
  LARGE: "subheading-large",
};

export const subheadingColor = {
  RED: "subheading-red",
};

const Subheading: React.FC<IProps> = ({ children, size, color }) => {
  return <h3 className={classnames("subheading", size, color)}>{children}</h3>;
};
export default Subheading;
