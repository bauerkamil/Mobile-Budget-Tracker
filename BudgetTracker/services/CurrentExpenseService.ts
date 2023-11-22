import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, or, query, where } from "firebase/firestore";

import { firestore } from "./firebaseinit";
import { ICurrentExpense } from "../common/interfaces";
import { getUserId } from "./AuthService";
import Toast from "react-native-toast-message";

const CURRENT_EXPENSES_TABLE_NAME = "CurrentExpenses"

const getDate = (data: any): Date => {
  const typedData = data as Timestamp;
  const time = typedData.toMillis();
  return new Date(time);
}

export const getUserCurrentExpenses = async (): Promise<ICurrentExpense[] | undefined> => {
  try {
    const userId = getUserId();
    if (!userId) {
      return undefined;
    }

    const currentExpensesRef = collection(firestore, CURRENT_EXPENSES_TABLE_NAME);
    const currentExpensesQuery = query(currentExpensesRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(currentExpensesQuery);
    const response = querySnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() } as unknown as {id?: string, userId?: string, categoryId: string, name: string, value: number, date: Timestamp}));
    
    const currentExpenses = response.map((expense) => ({...expense, date: getDate(expense.date)} as ICurrentExpense));
    return currentExpenses;
  } catch (err: any) {
    console.error(err);
    Toast.show({
      type: "error",
      text1: "Error",
      text2: err.message,
    });
  }
}

export const addCurrentExpense = async (currentExpense: ICurrentExpense) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return undefined;
    }

    currentExpense.userId = userId;
    const currentExpensesRef = collection(firestore, CURRENT_EXPENSES_TABLE_NAME);
    delete currentExpense.id;
    const doc = await addDoc(currentExpensesRef, currentExpense);
    return doc.id;
  } catch (err: any) {
    console.error(err);
    Toast.show({
      type: "error",
      text1: "Error",
      text2: err.message,
    });
  }
}

export const removeCurrentExpense = async (currentExpenseId: string) => {
  try {
    const currentExpenseRef = doc(firestore, CURRENT_EXPENSES_TABLE_NAME, currentExpenseId);
    await deleteDoc(currentExpenseRef);
  } catch (err: any) {
    console.error(err);
    Toast.show({
      type: "error",
      text1: "Error",
      text2: err.message,
    });
  }
}
