import { ICurrentExpense } from "./ICurrentExpense";

export interface ITransaction extends ICurrentExpense {
  recurring: boolean;
}
