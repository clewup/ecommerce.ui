import { Button } from "@mui/material";
import React, { SetStateAction } from "react";
import "./account-footer.scss";
import { FormikProps } from "formik";
import { IUser } from "../../../types/IUser";

interface IProps {
  formik: FormikProps<IUser>;
  isEditing: boolean;
  setEditing: React.Dispatch<SetStateAction<boolean>>;
}

const AccountFooter: React.FC<IProps> = ({ formik, isEditing, setEditing }) => {
  return (
    <div id={"account-footer"}>
      <Button
        variant={"contained"}
        color={"info"}
        size={"large"}
        onClick={() => {
          if (isEditing) {
            formik.resetForm({ values: formik.initialValues });
            setEditing(false);
          } else {
            setEditing(true);
          }
        }}
      >
        Edit
      </Button>
      <Button
        type={"submit"}
        variant={"contained"}
        color={"success"}
        size={"large"}
        disabled={!isEditing || !formik.dirty}
      >
        Save
      </Button>
    </div>
  );
};
export default AccountFooter;
