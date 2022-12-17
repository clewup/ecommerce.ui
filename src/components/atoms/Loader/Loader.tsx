import { HashLoader } from "react-spinners";
import "./loader.scss";

interface IProps {
  color?: string;
}

const Loader: React.FC<IProps> = ({ color = "#ccc" }) => {
  return (
    <div id={"loader"}>
      <HashLoader color={color} loading={true} size={75} />
    </div>
  );
};
export default Loader;
