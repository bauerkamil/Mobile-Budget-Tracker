import { ICategory } from "../../../../../../common/interfaces";

export interface ICategoryProps {
  category: ICategory;
  onClick: (id: number) => void;
}
