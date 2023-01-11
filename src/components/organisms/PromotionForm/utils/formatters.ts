import { IDiscount } from "../../../../interfaces/IDiscount";
import { ISelectOption } from "../../../atoms/Select/Select";

export const formatDateRangeText = (
  startDate?: Date | null,
  endDate?: Date | null
): string | undefined => {
  if (startDate && endDate) {
    return `Active from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`;
  }
  if (startDate && !endDate) {
    return `Active from ${startDate.toLocaleDateString()}`;
  }
  if (!startDate && endDate) {
    return `Active until ${endDate.toLocaleDateString()}`;
  }
  if (!startDate && !endDate) {
    return `Always active`;
  }
};

export const formatDiscountSelectOptions = (
  discounts: IDiscount[] | undefined
) => {
  let formattedOptions: ISelectOption[] = [];

  discounts?.forEach((discount) => {
    formattedOptions.push({
      label: discount.name,
      value: discount.id,
    });
  });

  return formattedOptions;
};
