import Heading from "../../atoms/Heading/Heading";
import { Button } from "@mui/material";
import React, { SetStateAction } from "react";
import { IUser } from "../../../types/IUser";
import "./account-header.scss";

interface IProps {
  user?: IUser;
  isEditing: boolean;
  setEditing: React.Dispatch<SetStateAction<boolean>>;
}

const AccountHeader: React.FC<IProps> = ({ user, isEditing, setEditing }) => {
  return (
    <div id={"account-header"}>
      <Heading>
        {user?.firstName} {user?.lastName}
      </Heading>
      <div className={"action-buttons"}>
        <Button
          variant={"contained"}
          color={"info"}
          onClick={() => (isEditing ? setEditing(false) : setEditing(true))}
        >
          Edit
        </Button>
        <Button variant={"contained"} color={"success"}>
          Save
        </Button>
      </div>
    </div>
  );
};
export default AccountHeader;
