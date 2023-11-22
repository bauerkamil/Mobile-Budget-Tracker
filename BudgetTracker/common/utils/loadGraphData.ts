import { ITransaction } from "../interfaces";

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
