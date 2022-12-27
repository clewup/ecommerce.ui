import { useEffect } from "react";
import { HashLoader } from "react-spinners";
import "./app-loader.scss";
import disableScroll from "disable-scroll";
import { colors } from "../../../styles/colors";

const AppLoader = () => {
  useEffect(() => {
    disableScroll.on();
    return () => disableScroll.off();
  });

  return (
    <div id={"app-loader"}>
      <div>
        <HashLoader
          color={colors.LIGHT_GREY}
          loading={true}
          size={75}
          data-testid="loader"
        />
      </div>
    </div>
  );
};
export default AppLoader;
