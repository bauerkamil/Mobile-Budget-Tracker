export interface IExpense {
  id?: string;
  userId?: string;
  categoryId: string;
  name: string;
  value: number;
}
