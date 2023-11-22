import {
  ICategory,
  IRecurringExpense,
} from "../../../../../../common/interfaces";

export interface IAddExpenseProps {
  visible: boolean;
  categories: ICategory[];
  onDismiss: () => void;
  onAdd: (category: IRecurringExpense) => void;
}
