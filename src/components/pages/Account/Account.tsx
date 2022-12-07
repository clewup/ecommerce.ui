import "./account.scss";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../contexts/User";
import AccountDetails from "../../organisms/AccountDetails/AccountDetails";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import AccountFooter from "../../molecules/AccountFooter/AccountFooter";
import ErrorMessage from "../../molecules/ErrorMessage/ErrorMessage";
import { Form, Formik } from "formik";
import useUser from "../../../hooks/useUser";

const Account = () => {
  const { user } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);
  const { updateUser } = useUser();

  if (!user) {
    return (
      <ErrorMessage message={"You must be logged in to view your details."} />
    );
  }

  console.log(user);

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
            <Form>
              <AccountDetails
                formik={formik}
                user={user}
                isEditing={isEditing}
              />
              <AccountFooter isEditing={isEditing} setEditing={setEditing} />
            </Form>
          </Wrapper>
        );
      }}
    </Formik>
  );
};
export default Account;
