import {
  ICurrentCategory,
  IExpense,
} from "../../../../../../common/interfaces";

export interface IAddExpenseProps {
  visible: boolean;
  category: ICurrentCategory;
  onDismiss: () => void;
  onAdd: (expense: IExpense) => void;
}
