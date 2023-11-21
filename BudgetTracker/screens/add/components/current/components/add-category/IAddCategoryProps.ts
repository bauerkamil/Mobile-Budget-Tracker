import { ICategory } from "../../../../../../common/interfaces";

export interface IAddCategoryProps {
  visible: boolean;
  onDismiss: () => void;
  onAdd: (category: ICategory) => void;
}
