export interface IRecurringExpense {
  id?: string;
  userId?: string;
  name: string;
  categoryId: number;
  value: number;
  day: number;
}
