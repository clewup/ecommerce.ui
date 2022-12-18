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

const Header = () => {
  const { isAuthenticated, role } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div id={"header"}>
      <div className={"header-top"}>
        <div className={"header-logo"}>
          <EcommerceIcon fontSize={"inherit"} />
          <p>Ecommerce</p>
        </div>
        <div className={"header-content"}>
          <div className={"header-actions"}>
            <span>
              {isAuthenticated ? (
                <p onClick={() => navigate("account")}>ACCOUNT</p>
              ) : (
                <>
                  <p onClick={() => navigate("login")}>LOGIN</p>
                  <p onClick={() => navigate("register")}>REGISTER</p>
                </>
              )}
              {role &&
                (role === roles.DEVELOPER || role === roles.EMPLOYEE) && (
                  <p onClick={() => navigate("admin")}>ADMIN</p>
                )}
              <p onClick={() => navigate("cart")}>CART</p>
            </span>
          </div>
          <div className={"header-information"}>
            <div className={"header-shipping"}>
              <ShippingIcon />
              <div>
                <p className={"header-bolded"}>FREE SHIPPING</p>
                <p>STORE WIDE</p>
              </div>
            </div>
            <div className={"header-telephone"}>
              <PhoneIcon />
              <div>
                <p>UK +12 345678910</p>
                <p>EU +10 987654321</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"header-bottom"}>
        <p onClick={() => navigate("/")}>HOME</p>
        <StoreDropdown />
        <p onClick={() => navigate("about-us")}>ABOUT US</p>
        <p onClick={() => navigate("faq")}>FAQ</p>
        <p onClick={() => navigate("contact-us")}>CONTACT US</p>
      </div>
    </div>
  );
};
export default Header;
