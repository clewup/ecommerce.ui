import { TextField } from "@mui/material";
import { FieldAttributes, FormikProps } from "formik";
import React from "react";

interface IProps {
  field?: FieldAttributes<any>;
  form?: FormikProps<any>;
  label?: string;
  isPassword?: boolean;
  disabled?: boolean;
  value?: unknown;
  onChange?: (e: any) => void;
  width?: string;
}

const Input: React.FC<IProps> = ({
  field,
  form,
  label,
  isPassword,
  disabled = false,
  value,
  onChange,
  width,
}) => {
  return (
    <TextField
      {...field}
      error={form?.touched[field.name] && form?.errors[field.name]}
      label={label}
      type={isPassword ? "password" : "text"}
      disabled={disabled}
      value={value ?? value}
      onChange={onChange ?? onChange}
      sx={{
        marginTop: 1,
        marginBottom: 1,
        backgroundColor: "white",
        textAlign: "center",
        width: width ?? "100%",
      }}
    />
  );
};
export default Input;
