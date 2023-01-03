import "./header.scss";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/Auth";
import {
  Landscape as EcommerceIcon,
  AccountCircleOutlined as AccountIcon,
  VpnKeyOutlined as RegisterIcon,
  ShoppingCartOutlined as CartIcon,
  AdminPanelSettingsOutlined as AdminIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { roles } from "../../../enums/roles";
import StoreDropdown from "./StoreDropdown/StoreDropdown";
import Text from "../../atoms/Text/Text";
import getCategories from "../../../api/GetCategories";
import getSubcategories from "../../../api/GetSubcategories";
import getLinkedSubcategories from "../../../api/GetLinkedSubcategories";
import getRanges from "../../../api/GetRanges";
import { ProductContext } from "../../../contexts/Product";
import Input from "../../atoms/Input/Input";

const Header = () => {
  const { isAuthenticated, role } = useContext(AuthContext);
  const navigate = useNavigate();

  const [_searchQuery, _setSearchQuery] = useState("");

  const {
    categories,
    setCategories,
    subcategories,
    setSubcategories,
    linkedSubcategories,
    setLinkedSubcategories,
    ranges,
    setRanges,
    setCategoryQuery,
    setSubcategoryQuery,
    setRangeQuery,
    setSearchQuery,
    resetQueries,
  } = useContext(ProductContext);

  useEffect(() => {
    if (categories.length === 0 || !categories.length) {
      getCategories().then((res) => {
        setCategories(res.data);
      });
    }
    if (subcategories.length === 0 || !subcategories.length) {
      getSubcategories().then((res) => {
        setSubcategories(res.data);
      });
    }
    if (linkedSubcategories.length === 0 || !linkedSubcategories.length) {
      getLinkedSubcategories().then((res) => {
        setLinkedSubcategories(res.data);
      });
    }
    if (ranges.length === 0 || !ranges.length) {
      getRanges().then((res) => {
        setRanges(res.data);
      });
    }
    // eslint-disable-next-line
  }, []);

  const handleSearch = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      resetQueries();
      navigate("store");
      setSearchQuery(_searchQuery);
    }
  };

  return (
    <div id={"header"}>
      <div className={"header-top"}>
        <div className={"header-logo"} onClick={() => navigate("/")}>
          <EcommerceIcon fontSize={"inherit"} />
          <Text>ECOMMERCE</Text>
        </div>

        <div className={"header-content"}>
          <div className={"header-search"}>
            <Input
              value={_searchQuery}
              onChange={(e) => _setSearchQuery(e.target.value)}
              onKeyDown={(e) => handleSearch(e)}
              width={"500px"}
              icon={<SearchIcon />}
            />
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
        <div className={"header-store-links"}>
          {linkedSubcategories.map((linkedSubcategory) => {
            return (
              <div
                key={linkedSubcategory.category}
                className={"header-store-link"}
              >
                <StoreDropdown
                  header={linkedSubcategory.category}
                  options={linkedSubcategory.subcategories}
                  headerAction={setCategoryQuery}
                  optionAction={setSubcategoryQuery}
                />
              </div>
            );
          })}
          <div className={"header-store-link"}>
            <StoreDropdown
              header={"Ranges"}
              options={ranges.slice(0, 10)}
              optionAction={setRangeQuery}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
