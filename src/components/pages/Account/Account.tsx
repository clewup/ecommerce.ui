import React, { useContext, useState } from "react";
import { UserContext } from "../../../contexts/User";
import AccountDetails from "../../organisms/AccountDetails/AccountDetails";
import AccountHeader from "../../molecules/AccountHeader/AccountHeader";

const Account = () => {
  const { user } = useContext(UserContext);
  const [isEditing, setEditing] = useState(false);

  if (!user) {
    return <p>You must be logged in to view your details.</p>;
  }

  return (
    <div id={"account"}>
      <AccountHeader
        user={user}
        isEditing={isEditing}
        setEditing={setEditing}
      />
      <AccountDetails user={user} isEditing={isEditing} />
    </div>
  );
};
export default Account;
