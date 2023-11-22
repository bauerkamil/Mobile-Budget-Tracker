import { ITransaction } from "../interfaces";

export const loadGraphData = (latestExpenses: ITransaction[]) => {
  const currentDayIndex = new Date().getDay();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const orderedDays = days
    .slice(currentDayIndex)
    .concat(days.slice(0, currentDayIndex))
    .reverse();

  const filteredExpenses = latestExpenses.reduce(
    (acc: { day: number; value: number }[], expense: ITransaction) => {
      const day = expense.date.getDate();

      if (!acc[day]) {
        acc[day].value = 0;
      }

      acc[day].value += expense.value;

      return acc;
    },
    [],
  );

  return {
    labels: orderedDays,
    datasets: [
      {
        data: filteredExpenses.map((expense) => expense.value).reverse(),
      },
    ],
  };
};
