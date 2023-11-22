import { ICategory } from "../../../../common/interfaces";
import { ITransaction } from "../../../../common/interfaces/ITransaction";

export interface ITransactionItemProps {
  transaction: ITransaction;
  categoryId?: string;
  categories?: ICategory[];
}
