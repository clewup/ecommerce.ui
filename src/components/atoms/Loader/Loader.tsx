import { useEffect } from "react";
import { HashLoader } from "react-spinners";
import "./loader.scss";
import disableScroll from "disable-scroll";

const Loader = () => {
  useEffect(() => {
    disableScroll.on();
    return () => disableScroll.off();
  });

  return (
    <div id={"loader"}>
      <div>
        <HashLoader
          color={"#ccc"}
          loading={true}
          size={100}
          data-testid="loader"
        />
      </div>
    </div>
  );
};
export default Loader;
