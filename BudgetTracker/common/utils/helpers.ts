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
  categories: ICategory[],
): IChartData[] => {
  const groupedTransactions: IChartData[] = [];
  categories.forEach((category) => {
    const transactionsForCategory = transactions.filter(
      (transaction) => transaction.categoryId === category.id,
    );
    const total = transactionsForCategory.reduce(
      (total, transaction) => total + transaction.value,
      0,
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

export const loadGraphData = (latestExpenses: ITransaction[]) => {
  const currentDayIndex = new Date().getDay();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const orderedDays = days
    .slice(currentDayIndex)
    .concat(days.slice(0, currentDayIndex));

  const filteredExpenses = latestExpenses.reduce(
    (acc: { [day: number]: number }, expense: ITransaction) => {
      const day = expense.date.getDate();

      if (!acc[day]) {
        acc[day] = 0;
      }

      acc[day] += expense.value;

      return acc;
    },
    {},
  );

  return {
    labels: orderedDays,
    datasets: [
      {
        data: Object.entries(filteredExpenses).map(([_key, value]) => value),
      },
    ],
  };
};

export const loadTopSpending = (
  latestExpenses: ITransaction[],
  categories: ICategory[],
): ICategory[] => {
  const topSpending = latestExpenses.reduce(
    (acc: { [categoryId: string]: number }, expense: ITransaction) => {
      const categoryId = expense.categoryId;

      if (!acc[categoryId]) {
        acc[categoryId] = 0;
      }

      acc[categoryId] += expense.value;
      return acc;
    },
    {},
  );

  const sortedTopSpending = Object.entries(topSpending)
    .sort((a, b) => b[1] - a[1])
    .map(([categoryId, _value]) => categoryId);

  return sortedTopSpending.map(
    (categoryId) => categories.find((category) => category.id === categoryId)!,
  );
};
