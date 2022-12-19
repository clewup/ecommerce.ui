import "./tile.scss";
import classnames from "classnames";
import Text, { textSize } from "../../atoms/Text/Text";
import { Button } from "@mui/material";
import Subheading from "../../atoms/Subheading/Subheading";

interface IProps {
  variant: string;
  heading: string;
  caption: string;
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
  heading,
  caption,
  buttonText,
  buttonOnClick,
}) => {
  return (
    <div id={"tile"} className={classnames(variant)}>
      <div className={"tile-text"}>
        <Subheading>{heading}</Subheading>
        <Text size={textSize.LARGE}>{caption}</Text>
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
