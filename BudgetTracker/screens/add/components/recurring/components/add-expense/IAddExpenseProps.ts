import { IRecurringExpense } from "../../../../../../common/interfaces";

export interface IAddExpenseProps {
  visible: boolean;
  onDismiss: () => void;
  onAdd: (category: IRecurringExpense) => void;
}
