import { Button } from "@mui/material";
import React, { SetStateAction } from "react";
import "./account-footer.scss";

interface IProps {
  isEditing: boolean;
  setEditing: React.Dispatch<SetStateAction<boolean>>;
}

const AccountFooter: React.FC<IProps> = ({ isEditing, setEditing }) => {
  return (
    <div id={"account-footer"}>
      <Button
        variant={"contained"}
        color={"info"}
        size={"large"}
        onClick={() => (isEditing ? setEditing(false) : setEditing(true))}
      >
        Edit
      </Button>
      <Button
        type={"submit"}
        variant={"contained"}
        color={"success"}
        size={"large"}
        disabled={!isEditing}
      >
        Save
      </Button>
    </div>
  );
};
export default AccountFooter;
