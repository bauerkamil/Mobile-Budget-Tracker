import { ICategory, ITransaction } from "../../common/interfaces";

export interface ITransactionItemProps {
  transaction: ITransaction;
  categories?: ICategory[];
}
