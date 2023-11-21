import { ICurrentCategory } from "../../../../../../common/interfaces";
import { ICategory } from "../../../../../../common/interfaces/ICategory";

export interface ICategoryProps {
  category: ICurrentCategory;
  onClick: (id: number) => void;
}
