import { InputAdornment, TextField, Tooltip } from "@mui/material";
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
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  width?: string;
  icon?: JSX.Element;
  iconPosition?: "start" | "end";
}

const Input: React.FC<IProps> = ({
  field,
  form,
  label,
  isPassword,
  disabled = false,
  value,
  onChange,
  onKeyDown,
  width,
  icon,
  iconPosition,
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
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        sx={{
          margin: "0.2rem 0",
          backgroundColor: colors.WHITE,
          textAlign: "center",
          width: width ?? "100%",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position={"end"}>{icon}</InputAdornment>
          ),
        }}
      />
    </Tooltip>
  );
};
export default Input;
