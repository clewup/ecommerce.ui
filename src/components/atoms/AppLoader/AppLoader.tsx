import { useEffect } from "react";
import { HashLoader } from "react-spinners";
import "./app-loader.scss";
import disableScroll from "disable-scroll";

const AppLoader = () => {
  useEffect(() => {
    disableScroll.on();
    return () => disableScroll.off();
  });

  return (
    <div id={"app-loader"}>
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
export default AppLoader;
