import "./account.scss";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../contexts/User";
import AccountDetails from "../../organisms/AccountDetails/AccountDetails";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import AccountFooter from "../../molecules/AccountFooter/AccountFooter";
import ErrorMessage from "../../molecules/ErrorMessage/ErrorMessage";

const Account = () => {
  const { user } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);

  if (!user) {
    return (
      <ErrorMessage message={"You must be logged in to view your details."} />
    );
  }

  return (
    <Wrapper id={"account"}>
      <AccountDetails user={user} isEditing={isEditing} />
      <AccountFooter isEditing={isEditing} setEditing={setEditing} />
    </Wrapper>
  );
};
export default Account;
