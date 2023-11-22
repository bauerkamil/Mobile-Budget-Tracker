import { IExpense } from "./IExpense";

export interface ICurrentExpense extends IExpense {
  date: Date;
}
