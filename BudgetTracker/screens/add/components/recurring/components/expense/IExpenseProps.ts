import { ICategory, IRecurringExpense } from "../../../../../../common/interfaces";

export interface IExpenseProps {
  expense: IRecurringExpense;
  categories: ICategory[];
  onClick: (id: number) => void;
}
