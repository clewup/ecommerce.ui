import "./header.scss";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth";
import {
  LocalPhone as PhoneIcon,
  LocalShipping as ShippingIcon,
  Landscape as EcommerceIcon,
  AccountCircleOutlined as AccountIcon,
  VpnKeyOutlined as RegisterIcon,
  ShoppingCartOutlined as CartIcon,
  AdminPanelSettingsOutlined as AdminIcon,
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
          <div className={"header-actions"}>
            {isAuthenticated ? (
              <div
                className={"header-action"}
                onClick={() => navigate("account")}
              >
                <AccountIcon />
                <Text>ACCOUNT</Text>
              </div>
            ) : (
              <>
                <div
                  className={"header-action"}
                  onClick={() => navigate("login")}
                >
                  <AccountIcon />
                  <Text>LOGIN</Text>
                </div>
                <div
                  className={"header-action"}
                  onClick={() => navigate("register")}
                >
                  <RegisterIcon />
                  <Text>REGISTER</Text>
                </div>
              </>
            )}
            {role && (role === roles.DEVELOPER || role === roles.EMPLOYEE) && (
              <div
                className={"header-action"}
                onClick={() => navigate("admin")}
              >
                <AdminIcon />
                <Text>ADMIN</Text>
              </div>
            )}
            <div className={"header-action"} onClick={() => navigate("cart")}>
              <CartIcon />
              <Text>CART</Text>
            </div>
          </div>
        </div>
      </div>
      <div className={"header-bottom"}>
        <Text onClick={() => navigate("/")}>HOME</Text>
        <StoreDropdown />
        <Text onClick={() => navigate("faq")}>FAQ</Text>
        <Text onClick={() => navigate("contact-us")}>CONTACT US</Text>
      </div>
    </div>
  );
};
export default Header;
