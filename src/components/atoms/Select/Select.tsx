import { FieldAttributes, FormikProps } from "formik";
import {
  InputLabel,
  MenuItem,
  Select as SelectInput,
  Tooltip,
} from "@mui/material";
import React from "react";
import { colors } from "../../../styles/colors";

export interface ISelectOption {
  value: string;
  label: string;
}

interface IProps {
  field?: FieldAttributes<any>;
  form?: FormikProps<any>;
  label?: string;
  disabled?: boolean;
  value?: unknown;
  onChange?: (e: any) => void;
  options: ISelectOption[];
  width?: string;
  selectText?: string;
}

const Select: React.FC<IProps> = ({
  field,
  form,
  label,
  disabled = false,
  value,
  onChange,
  options,
  width,
  selectText = "Select",
}) => {
  return (
    <>
      <Tooltip
        placement="right"
        title={
          form?.touched[field.name] &&
          form?.errors[field.name] &&
          String(form?.errors[field.name])
        }
      >
        <>
          <InputLabel>{label}</InputLabel>
          <SelectInput
            {...field}
            disabled={disabled}
            value={value ?? value}
            onChange={onChange ?? onChange}
            error={form?.touched[field.name] && form?.errors[field.name]}
            sx={{
              marginTop: 1,
              marginBottom: 1,
              backgroundColor: colors.WHITE,
              textAlign: "center",
              width: width ?? "100%",
            }}
          >
            <MenuItem value={"select"}>{selectText}</MenuItem>
            {options?.map((option: ISelectOption) => {
              return (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  data-testid="select-option"
                >
                  {option.label}
                </MenuItem>
              );
            })}
          </SelectInput>
        </>
      </Tooltip>
    </>
  );
};
export default Select;
