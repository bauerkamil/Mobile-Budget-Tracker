import { addDays, format, isSameDay } from "date-fns";
import { ICategory, ITransaction } from "../interfaces";
import { ICategoryExpenses } from "../interfaces/ICategoryExpenses";

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
): ICategoryExpenses[] => {
  const groupedTransactions: ICategoryExpenses[] = [];
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
      value: total,
      ...category
    });
  });
  return groupedTransactions;
};

export const loadGraphData = (transactions: ITransaction[]) => {
  const currentDate = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(currentDate.getDate() - 6); // Get the date 7 days ago

  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = transaction.date;
    return (transactionDate >= sevenDaysAgo && transactionDate <= currentDate
      || isSameDay(transactionDate, currentDate) || isSameDay(transactionDate, sevenDaysAgo));
  });

  const groupedTransactions: { [date: string]: number } = {};

  filteredTransactions.forEach((transaction) => {
    const transactionDate = format(transaction.date, "eee");
    if (groupedTransactions[transactionDate]) {
      groupedTransactions[transactionDate] += transaction.value;
    } else {
      groupedTransactions[transactionDate] = transaction.value;
    }
  });

  const orderedDates = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(currentDate.getDate() - i);
    orderedDates.push(format(date, "eee"));
  }

  const groupedValues = orderedDates.map((date) => groupedTransactions[date] || 0);

  return {
    labels: orderedDates,
    datasets: [
      {
        data: Object.entries(groupedValues).map(([_key, value]) => value),
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
