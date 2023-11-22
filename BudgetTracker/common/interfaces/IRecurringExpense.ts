export interface IRecurringExpense {
  id?: string;
  userId?: string;
  name: string;
  categoryId: string;
  value: number;
  day: number;
}
