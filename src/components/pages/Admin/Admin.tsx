import "./admin.scss";
import AddProductForm from "../../organisms/AddProductForm/AddProductForm";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import AllOrders from "../../organisms/AllOrders/AllOrders";
import { Tab, Tabs } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AppError from "../../molecules/AppError/AppError";
import { AuthContext } from "../../../contexts/Auth";
import { roles } from "../../../enums/roles";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();
  const { isAuthenticated, role } = useContext(AuthContext);

  const handleTabChange = (event: React.SyntheticEvent, newTabIndex: any) => {
    setTabIndex(newTabIndex);
  };

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
    // eslint-disable-next-line
  }, []);

  if (role && role !== roles.DEVELOPER && role !== roles.EMPLOYEE) {
    return (
      <AppError
        error={{ message: "You do not have permission to view this page." }}
      />
    );
  }

  return (
    <Wrapper id={"admin"}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Add ProductTile" />
        <Tab label="Orders" />
      </Tabs>
      {tabIndex === 0 && <AddProductForm />}
      {tabIndex === 1 && <AllOrders />}
    </Wrapper>
  );
};
export default Admin;
