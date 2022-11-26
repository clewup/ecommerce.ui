import { HashLoader } from "react-spinners";
import "./loader.scss";

const Loader = () => {
  return (
    <div id={"loader"}>
      <HashLoader
        color={"#ccc"}
        loading={true}
        size={100}
        data-testid="loader"
      />
    </div>
  );
};
export default Loader;
