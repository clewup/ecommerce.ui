import { ISelectOption } from "../components/atoms/SelectInput/SelectInput";

interface IProps {
  options: string[];
  labels?: string[];
}

export const formatSelectOptions = ({
  options,
  labels,
}: IProps): ISelectOption[] => {
  let formattedOptions: ISelectOption[] = [];

  if (labels) {
    formattedOptions = options.map((option, index) => ({
      value: option,
      label: labels[index]!,
    }));
  } else {
    formattedOptions = options.map((option) => ({
      value: option,
      label: option,
    }));
  }

  return formattedOptions;
};
