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
