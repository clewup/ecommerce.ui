import "./advertisements-banner.scss";
import AdvertisementTile from "../../molecules/AdvertisementTile/AdvertisementTile";
import { useNavigate } from "react-router-dom";
import { advertisementData } from "../../../data/advertisementData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AdvertisementsBanner = () => {
  return (
    <div id={"advertisement-banner"}>
      <Carousel
        showArrows={false}
        autoPlay={true}
        showStatus={false}
        emulateTouch={true}
        swipeable={true}
        showThumbs={false}
      >
        {advertisementData.map((advertisement) => {
          return <AdvertisementTile advertisement={advertisement} />;
        })}
      </Carousel>
    </div>
  );
};
export default AdvertisementsBanner;
