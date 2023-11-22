import { addDoc, collection, deleteDoc, doc, getDocs, or, query, where } from "firebase/firestore";

import { firestore } from "./firebaseinit";
import { ICurrentExpense } from "../common/interfaces";
import { getUserId } from "./AuthService";
import Toast from "react-native-toast-message";

const current_EXPENSES_TABLE_NAME = "currentExpenses"

export const getUserCurrentExpenses = async (): Promise<ICurrentExpense[] | undefined> => {
  try {
    const userId = getUserId();
    if (!userId) {
      return undefined;
    }

    const currentExpensesRef = collection(firestore, current_EXPENSES_TABLE_NAME);
    const currentExpensesQuery = query(currentExpensesRef, where("__userId__", "==", userId));
    const querySnapshot = await getDocs(currentExpensesQuery);
    const currentExpenses = querySnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() } as unknown as ICurrentExpense));

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
    const currentExpensesRef = collection(firestore, current_EXPENSES_TABLE_NAME);
    delete currentExpense.id;
    await addDoc(currentExpensesRef, currentExpense);
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
    const currentExpenseRef = doc(firestore, current_EXPENSES_TABLE_NAME, currentExpenseId);
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
