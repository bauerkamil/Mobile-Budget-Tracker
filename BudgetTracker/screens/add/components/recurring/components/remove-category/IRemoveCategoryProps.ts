import { IRecurringCategory } from "../../../../../../common/interfaces";

export interface IRemoveCategoryProps {
  category: IRecurringCategory;
  visible: boolean;
  onDismiss: () => void;
  onRemove: (id: number) => void;
}
