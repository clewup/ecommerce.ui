import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import React from "react";
import { FieldAttributes, FormikProps } from "formik";
import { colors } from "../../../styles/colors";
import { Moment } from "moment";

interface IProps {
  field?: FieldAttributes<any>;
  form?: FormikProps<any>;
  label?: string;
  disabled?: boolean;
  value?: unknown;
  onChange?: (value: Moment) => void;
  width?: string;
}

const DatePicker: React.FC<IProps> = ({
  field,
  form,
  label,
  disabled = false,
  value,
  onChange,
  width,
}) => {
  return (
    <DesktopDatePicker
      {...field}
      error={form?.touched[field.name] && form?.errors[field.name]}
      label={label}
      inputFormat="DD/MM/YYYY"
      value={value}
      onChange={onChange}
      disabled={disabled}
      renderInput={(params) => <TextField {...params} />}
      sx={{
        margin: "0.2rem 0",
        backgroundColor: colors.WHITE,
        textAlign: "center",
        width: width ?? "100%",
      }}
    />
  );
};
export default DatePicker;
