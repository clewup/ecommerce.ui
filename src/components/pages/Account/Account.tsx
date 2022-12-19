import "./account.scss";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/User";
import AccountForm from "../../organisms/AccountForm/AccountForm";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import AccountFooter from "../../molecules/AccountFooter/AccountFooter";
import { Form, Formik } from "formik";
import useUser from "../../../hooks/useUser";
import AccountOrders from "../../organisms/AccountOrders/AccountOrders";
import { Tab, Tabs } from "@mui/material";
import { AuthContext } from "../../../contexts/Auth";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { validationSchema, updateUser } = useUser();
  const navigate = useNavigate();

  const [isEditing, setEditing] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newTabIndex: any) => {
    setTabIndex(newTabIndex);
  };

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
    // eslint-disable-next-line
  }, []);

  return (
    <Formik
      initialValues={user}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        updateUser(values);
        setEditing(false);
      }}
    >
      {(formik) => {
        return (
          <Wrapper id={"account"}>
            <Tabs value={tabIndex} onChange={handleTabChange} centered>
              <Tab label="Details" />
              <Tab label="Orders" />
            </Tabs>
            {tabIndex === 0 && (
              <Form>
                <AccountForm
                  formik={formik}
                  user={user}
                  isEditing={isEditing}
                />
                <AccountFooter
                  formik={formik}
                  isEditing={isEditing}
                  setEditing={setEditing}
                />
              </Form>
            )}
            {tabIndex === 1 && <AccountOrders />}
          </Wrapper>
        );
      }}
    </Formik>
  );
};
export default Account;
