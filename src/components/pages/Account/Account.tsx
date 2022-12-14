import "./account.scss";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/User";
import UserForm from "../../organisms/UserForm/UserForm";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import useUser from "../../../hooks/useUser";
import UserOrders from "../../organisms/UserOrders/UserOrders";
import { Tab, Tabs } from "@mui/material";
import { AuthContext } from "../../../contexts/Auth";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { updateUser } = useUser();
  const navigate = useNavigate();

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newTabIndex: any) => {
    setTabIndex(newTabIndex);
  };

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper id={"account"}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Details" />
        <Tab label="Orders" />
      </Tabs>
      {tabIndex === 0 && <UserForm user={user} updateUser={updateUser} />}
      {tabIndex === 1 && <UserOrders />}
    </Wrapper>
  );
};
export default Account;
