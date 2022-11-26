import { HashLoader } from "react-spinners";
import "./loader.scss";

const Loader = () => {
  return (
    <div id={"loader"}>
      <HashLoader loading={true} size={150} data-testid="loader" />
    </div>
  );
};
export default Loader;
