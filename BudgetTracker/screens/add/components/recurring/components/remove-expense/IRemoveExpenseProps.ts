import { IRecurringExpense } from "../../../../../../common/interfaces";

export interface IRemoveExpenseProps {
  expense: IRecurringExpense;
  visible: boolean;
  onDismiss: () => void;
  onRemove: (id: string) => void;
}
