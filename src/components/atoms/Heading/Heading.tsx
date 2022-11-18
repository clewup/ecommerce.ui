import React from "react";
import "./heading.scss";

interface IProps {
  children: any;
}

const Heading: React.FC<IProps> = ({ children }) => {
  return <h3 className={"heading"}>{children}</h3>;
};
export default Heading;
