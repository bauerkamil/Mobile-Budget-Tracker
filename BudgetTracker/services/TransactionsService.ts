import { addDays, isSameDay } from "date-fns";
import { IRecurringExpense } from "../common/interfaces";
import { ITransaction } from "../common/interfaces";
import { getUserCurrentExpenses } from "./CurrentExpenseService";
import { getUserRecurringExpenses } from "./RecurringExpenseService";

const getRecurringExpenses = (
  expenses: IRecurringExpense[],
  startDate: Date,
  endDate: Date,
): ITransaction[] => {
  const daysBetween: Date[] = [];
  const transactions: ITransaction[] = [];
  let date = startDate.getTime() < endDate.getTime() ? startDate : endDate;
  const end = startDate.getTime() < endDate.getTime() ? endDate : startDate;
  while (date <= end) {
    daysBetween.push(date);
    date = addDays(date, 1);
  }
  expenses.forEach((expense) => {
    daysBetween.forEach((day) => {
      if (day.getDate() === expense.day) {
        transactions.push({ ...expense, date: day, recurring: true });
      }
    });
  });

  return transactions;
};

export const getTransactions = async (startDate: Date, endDate: Date) => {
  if (!startDate || !endDate) {
    return;
  }
  let currentResponse = await getUserCurrentExpenses();

  currentResponse = currentResponse?.filter(
    (expense) =>
      (expense.date >= startDate && expense.date <= endDate) ||
      isSameDay(expense.date, startDate) ||
      isSameDay(expense.date, endDate),
  );

  const currentExpenses = currentResponse?.map(
    (expense) => ({ ...expense, recurring: false }) as ITransaction,
  );

  var recurringResponse = await getUserRecurringExpenses();
  
  const recurringExpenses = getRecurringExpenses(
    recurringResponse ?? [],
    startDate,
    endDate,
  );

  const transactions = [
    ...(currentExpenses ?? []),
    ...(recurringExpenses ?? []),
  ];

  return transactions;
};
