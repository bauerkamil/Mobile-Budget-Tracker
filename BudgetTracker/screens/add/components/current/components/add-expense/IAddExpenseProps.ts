import {
  ICategory,
  ICurrentExpense,
} from "../../../../../../common/interfaces";

export interface IAddExpenseProps {
  visible: boolean;
  category: ICategory;
  onDismiss: () => void;
  onAdd: (expense: ICurrentExpense) => void;
}
