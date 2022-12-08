import "./account.scss";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../contexts/User";
import AccountDetails from "../../organisms/AccountDetails/AccountDetails";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import AccountFooter from "../../molecules/AccountFooter/AccountFooter";
import ErrorMessage from "../../molecules/ErrorMessage/ErrorMessage";
import { Form, Formik } from "formik";
import useUser from "../../../hooks/useUser";
import AccountOrders from "../../organisms/AccountOrders/AccountOrders";
import { Tab, Tabs } from "@mui/material";

const Account = () => {
  const { user } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const { updateUser } = useUser();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newTabIndex: any) => {
    setTabIndex(newTabIndex);
  };

  if (!user) {
    return (
      <ErrorMessage
        error={{ message: "You must be logged in to view your details." }}
      />
    );
  }

  return (
    <Formik
      initialValues={user}
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
                <AccountDetails
                  formik={formik}
                  user={user}
                  isEditing={isEditing}
                />
                <AccountFooter isEditing={isEditing} setEditing={setEditing} />
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
