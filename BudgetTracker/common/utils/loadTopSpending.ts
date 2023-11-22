import { ICategory, ITransaction } from "../interfaces";

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
