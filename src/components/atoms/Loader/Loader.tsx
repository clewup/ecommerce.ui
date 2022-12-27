import { HashLoader } from "react-spinners";
import "./loader.scss";
import { colors } from "../../../styles/colors";
import React from "react";

interface IProps {
  color?: string;
}

const Loader: React.FC<IProps> = ({ color = colors.LIGHT_GREY }) => {
  return (
    <div id={"loader"}>
      <HashLoader color={color} loading={true} size={75} />
    </div>
  );
};
export default Loader;
