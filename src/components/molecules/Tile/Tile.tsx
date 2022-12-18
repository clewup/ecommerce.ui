import "./tile.scss";
import classnames from "classnames";
import Text from "../../atoms/Text/Text";
import { Button } from "@mui/material";

interface IProps {
  variant: string;
  text: string;
  buttonText: string;
  buttonOnClick: () => void;
}

export const tileVariant = {
  BORN_TO_SKI: "born-to-ski",
  LIVE_TO_EXPLORE: "live-to-explore",
  DARE_TO_PUSH_LIMITS: "dare-to-push-limits",
};

const Tile: React.FC<IProps> = ({
  variant,
  text,
  buttonText,
  buttonOnClick,
}) => {
  return (
    <div id={"tile"} className={classnames(variant)}>
      <div className={"tile-text"}>
        <Text>{text}</Text>
      </div>
      <div className={"tile-actions"}>
        <Button
          onClick={buttonOnClick}
          size={"large"}
          type={"button"}
          variant={"contained"}
          color={"info"}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
export default Tile;
