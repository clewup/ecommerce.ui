import "./advertisements-banner.scss";
import AdvertisementTile from "../../molecules/AdvertisementTile/AdvertisementTile";
import { useNavigate } from "react-router-dom";

const AdvertisementsBanner = () => {
  const navigate = useNavigate();

  return (
    <div id={"advertisement-banner"}>
      <AdvertisementTile
        advertisement={{
          title: "BORN TO SKI",
          caption: "Essentials available for beginners and professionals.",
          image:
            "https://res.cloudinary.com/dliog6kq6/image/upload/v1671403988/ecommerce/photo-1551698618-1dfe5d97d256_py7nts.png",
          buttonText: "SHOP NOW",
          onClick: () => navigate("store"),
        }}
      />
      <AdvertisementTile
        advertisement={{
          title: "LIVE TO EXPLORE",
          caption: "Huge savings on ski wear and accessories.",
          image:
            "https://res.cloudinary.com/dliog6kq6/image/upload/v1671407117/ecommerce/clement-delhaye-cnluLIyhpBA-unsplash_p8yksa.jpg",
          buttonText: "BROWSE",
          onClick: () => navigate("store"),
        }}
      />
      <AdvertisementTile
        advertisement={{
          title: "DARE TO ENJOY",
          caption: "Hit the slopes in style with the latest products of 2022.",
          image:
            "https://res.cloudinary.com/dliog6kq6/image/upload/v1671407440/ecommerce/nicolai-berntsen-OyP-8El8vWk-unsplash_pjzbfz.jpg",
          buttonText: "TAKE A PEEK",
          onClick: () => navigate("store"),
        }}
      />
    </div>
  );
};
export default AdvertisementsBanner;
