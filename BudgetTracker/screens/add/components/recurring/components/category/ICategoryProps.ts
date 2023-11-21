import { IRecurringCategory } from "../../../../../../common/interfaces";

export interface ICategoryProps {
  category: IRecurringCategory;
  onClick: (id: number) => void;
}
