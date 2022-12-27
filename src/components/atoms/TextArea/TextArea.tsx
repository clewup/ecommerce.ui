import { TextField, Tooltip } from "@mui/material";
import { FieldAttributes, FormikProps } from "formik";
import React from "react";
import { colors } from "../../../styles/colors";

interface IProps {
  field?: FieldAttributes<any>;
  form?: FormikProps<any>;
  label?: string;
  isPassword?: boolean;
  disabled?: boolean;
  value?: unknown;
  onChange?: (e: any) => void;
  width?: string;
  rows?: number;
}

const TextArea: React.FC<IProps> = ({
  field,
  form,
  label,
  isPassword,
  disabled = false,
  value,
  onChange,
  width,
  rows = 4,
}) => {
  return (
    <Tooltip
      placement="right"
      title={
        form?.touched[field.name] &&
        form?.errors[field.name] &&
        String(form?.errors[field.name])
      }
    >
      <TextField
        {...field}
        error={form?.touched[field.name] && form?.errors[field.name]}
        label={label}
        type={isPassword ? "password" : "text"}
        disabled={disabled}
        value={value ?? value}
        multiline={true}
        rows={rows}
        onChange={onChange ?? onChange}
        sx={{
          marginTop: 1,
          marginBottom: 1,
          backgroundColor: colors.WHITE,
          textAlign: "center",
          width: width ?? "100%",
        }}
      />
    </Tooltip>
  );
};
export default TextArea;
