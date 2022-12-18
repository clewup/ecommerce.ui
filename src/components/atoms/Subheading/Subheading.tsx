import React from "react";
import "./subheading.scss";
import classnames from "classnames";

interface IProps {
  children: any;
  size: string;
  color?: string;
  noPadding?: boolean;
}

export const subheadingSize = {
  SMALL: "subheading-small",
  MEDIUM: "subheading-medium",
  LARGE: "subheading-large",
};

export const subheadingColor = {
  RED: "subheading-red",
  WHITE: "subheading-white",
};

const Subheading: React.FC<IProps> = ({ children, size, color, noPadding }) => {
  return (
    <h3
      className={classnames("subheading", size, color, {
        "no-padding": noPadding,
      })}
    >
      {children}
    </h3>
  );
};
export default Subheading;
