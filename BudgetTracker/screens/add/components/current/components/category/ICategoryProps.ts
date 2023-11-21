import { ICurrentCategory } from "../../../../../../common/interfaces";

export interface ICategoryProps {
  category: ICurrentCategory;
  onClick: (id: number) => void;
}
