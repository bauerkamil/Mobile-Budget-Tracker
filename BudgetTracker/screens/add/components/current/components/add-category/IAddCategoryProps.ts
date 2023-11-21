import { ICurrentCategory } from "../../../../../../common/interfaces";

export interface IAddCategoryProps {
  visible: boolean;
  onDismiss: () => void;
  onAdd: (category: ICurrentCategory) => void;
}
