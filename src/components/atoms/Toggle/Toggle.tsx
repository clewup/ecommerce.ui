import { FormControlLabel, Switch } from "@mui/material";
import { FieldAttributes, FormikProps } from "formik";
import React from "react";

interface IProps {
  field?: FieldAttributes<any>;
  form?: FormikProps<any>;
  label?: string;
  disabled?: boolean;
  isChecked?: boolean;
  onChange?: (event: React.SyntheticEvent) => void;
  onClick?: React.MouseEventHandler<HTMLLabelElement> | undefined;
}

const Toggle: React.FC<IProps> = ({
  field,
  form,
  label,
  disabled = false,
  isChecked,
  onChange,
  onClick,
}) => {
  return (
    <FormControlLabel
      {...field}
      error={form?.touched[field.name] && form?.errors[field.name]}
      disabled={disabled}
      control={<Switch defaultChecked={isChecked} />}
      label={label}
      onChange={onChange}
      onClick={onClick}
    />
  );
};
export default Toggle;
