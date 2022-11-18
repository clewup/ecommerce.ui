import React from "react";
import "./subheading.scss";

interface IProps {
  children: any;
}

const Subheading: React.FC<IProps> = ({ children }) => {
  return <h3 className={"subheading"}>{children}</h3>;
};
export default Subheading;
