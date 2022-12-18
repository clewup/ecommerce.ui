import "./header.scss";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth";
import {
  LocalPhone as PhoneIcon,
  LocalShipping as ShippingIcon,
  LocalOffer as EcommerceIcon,
} from "@mui/icons-material";
import { roles } from "../../../enums/roles";
import StoreDropdown from "./StoreDropdown/StoreDropdown";
import Text from "../../atoms/Text/Text";

const Header = () => {
  const { isAuthenticated, role } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div id={"header"}>
      <div className={"header-top"}>
        <div className={"header-logo"}>
          <EcommerceIcon fontSize={"inherit"} />
          <Text>Ecommerce</Text>
        </div>
        <div className={"header-content"}>
          <div className={"header-actions"}>
            <span>
              {isAuthenticated ? (
                <Text onClick={() => navigate("account")}>ACCOUNT</Text>
              ) : (
                <>
                  <Text onClick={() => navigate("login")}>LOGIN</Text>
                  <Text onClick={() => navigate("register")}>REGISTER</Text>
                </>
              )}
              {role &&
                (role === roles.DEVELOPER || role === roles.EMPLOYEE) && (
                  <Text onClick={() => navigate("admin")}>ADMIN</Text>
                )}
              <Text onClick={() => navigate("cart")}>CART</Text>
            </span>
          </div>
          <div className={"header-information"}>
            <div className={"header-shipping"}>
              <ShippingIcon />
              <div>
                <Text className={"header-bolded"}>FREE SHIPPING</Text>
                <Text>STORE WIDE</Text>
              </div>
            </div>
            <div className={"header-telephone"}>
              <PhoneIcon />
              <div>
                <Text>UK +12 345678910</Text>
                <Text>EU +10 987654321</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"header-bottom"}>
        <Text onClick={() => navigate("/")}>HOME</Text>
        <StoreDropdown />
        <Text onClick={() => navigate("about-us")}>ABOUT US</Text>
        <Text onClick={() => navigate("faq")}>FAQ</Text>
        <Text onClick={() => navigate("contact-us")}>CONTACT US</Text>
      </div>
    </div>
  );
};
export default Header;
