import React from "react";
import "./subheading.scss";
import classnames from "classnames";

interface IProps {
  children: any;
  size: string;
}

export const subheadingSize = {
  SMALL: "subheading-small",
  MEDIUM: "subheading-medium",
  LARGE: "subheading-large",
};

const Subheading: React.FC<IProps> = ({ children, size }) => {
  return <h3 className={classnames("subheading", size)}>{children}</h3>;
};
export default Subheading;
