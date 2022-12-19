import React from "react";
import "./subheading.scss";
import classnames from "classnames";

interface IProps {
  children: any;
  size?: string;
  color?: string;
  padding?: string;
  align?: string;
}

export const subheadingSize = {
  XSMALL: "subheading-xsmall",
  SMALL: "subheading-small",
  LARGE: "subheading-large",
};

const Subheading: React.FC<IProps> = ({
  children,
  size,
  color,
  padding,
  align,
}) => {
  return (
    <h3 className={classnames("subheading", size, color, padding, align)}>
      {children}
    </h3>
  );
};
export default Subheading;
