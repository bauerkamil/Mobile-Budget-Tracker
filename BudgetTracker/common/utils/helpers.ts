import { ICategory, IChartData, ITransaction } from "../interfaces";

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

export const groupTransactionsByCategory = (
  transactions: ITransaction[],
  categories: ICategory[]
): IChartData[] => {
  const groupedTransactions: IChartData[] = [];
  categories.forEach((category) => {
    const transactionsForCategory = transactions.filter(
      (transaction) => transaction.categoryId === category.id
    );
    const total = transactionsForCategory.reduce(
      (total, transaction) => total + transaction.value,
      0
    );
    if (total === 0) {
      return;
    }
    groupedTransactions.push({
      name: category.name,
      value: total,
      color: category.color,
    });
  });
  return groupedTransactions;
};
