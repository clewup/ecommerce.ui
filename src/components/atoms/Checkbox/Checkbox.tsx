import { FieldAttributes } from "formik";
import { Checkbox as CheckboxInput, InputLabel } from "@mui/material";
import React from "react";
import "./checkbox.scss";

interface IProps {
  field?: FieldAttributes<any>;
  label?: string;
  disabled?: boolean;
  value?: unknown;
  onChange?: (e: any) => void;
}

const Checkbox: React.FC<IProps> = ({
  field,
  label,
  disabled = false,
  value,
  onChange,
}) => {
  return (
    <div id={"checkbox-form-group"}>
      <InputLabel>{label}</InputLabel>
      <CheckboxInput
        {...field}
        disabled={disabled}
        checked={value ?? value}
        onChange={onChange ?? onChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
};
export default Checkbox;
