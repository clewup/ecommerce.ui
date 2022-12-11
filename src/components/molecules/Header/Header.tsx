import "./header.scss";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth";
import { roles } from "../../../enums/roles";
import { Button } from "@mui/material";
import StoreDropdown from "./StoreDropdown/StoreDropdown";

const Header = () => {
  const { isAuthenticated, role } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div id={"header"}>
      <div className={"header-group"}>
        <Button onClick={() => navigate("/")} sx={{ color: "white" }}>
          Home
        </Button>

        <StoreDropdown />

        <Button onClick={() => navigate("trending")} sx={{ color: "white" }}>
          Trending
        </Button>
      </div>

      <div className={"header-group"}>
        {!isAuthenticated ? (
          <Button onClick={() => navigate("login")} sx={{ color: "white" }}>
            Login
          </Button>
        ) : (
          <Button onClick={() => navigate("account")} sx={{ color: "white" }}>
            Account
          </Button>
        )}

        <Button onClick={() => navigate("cart")} sx={{ color: "white" }}>
          Cart
        </Button>

        {role && (role === roles.DEVELOPER || role === roles.EMPLOYEE) && (
          <Button onClick={() => navigate("admin")} sx={{ color: "white" }}>
            Admin
          </Button>
        )}
      </div>
    </div>
  );
};
export default Header;
