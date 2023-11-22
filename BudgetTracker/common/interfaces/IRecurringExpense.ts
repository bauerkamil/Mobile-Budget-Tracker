import { IExpense } from "./IExpense";

export interface IRecurringExpense extends IExpense {
  day: number;
}
