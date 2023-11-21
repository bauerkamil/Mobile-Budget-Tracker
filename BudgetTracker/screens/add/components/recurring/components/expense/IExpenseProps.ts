import { IRecurringExpense } from "../../../../../../common/interfaces";

export interface IExpenseProps {
  expense: IRecurringExpense;
  onClick: (id: number) => void;
}
