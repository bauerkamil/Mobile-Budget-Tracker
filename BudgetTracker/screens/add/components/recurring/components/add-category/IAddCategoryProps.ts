import { IRecurringCategory } from "../../../../../../common/interfaces";

export interface IAddCategoryProps {
  visible: boolean;
  onDismiss: () => void;
  onAdd: (category: IRecurringCategory) => void;
}
