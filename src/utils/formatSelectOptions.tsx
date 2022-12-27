import { ISelectOption } from "../components/atoms/SelectInput/SelectInput";

interface IProps {
  options: string[];
}

export const formatSelectOptions = ({ options }: IProps): ISelectOption[] => {
  let formattedOptions: ISelectOption[];

  formattedOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  return formattedOptions;
};
