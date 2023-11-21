export const parseDate = (startDate?: Date, endDate?: Date): string => {
  const dateToString = (date: Date): string =>
    `${date.getDate().toString().padStart(2, "0")}/` +
    `${(date.getMonth() + 1).toString().padStart(2, "0")}/` +
    `${date.getFullYear()}`;

  if (!startDate) {
    return "";
  }

  if (!endDate || startDate.getTime() === endDate.getTime()) {
    return dateToString(startDate);
  }

  return dateToString(startDate) + " - " + dateToString(endDate);
};
