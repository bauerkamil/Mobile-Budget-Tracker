import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  or,
  query,
  where,
} from "firebase/firestore";

import { firestore } from "./firebaseinit";
import { IRecurringExpense } from "../common/interfaces";
import { getUserId } from "./AuthService";
import Toast from "react-native-toast-message";

const RECURRING_EXPENSES_TABLE_NAME = "RecurringExpenses";

export const getUserRecurringExpenses = async (): Promise<
  IRecurringExpense[] | undefined
> => {
  try {
    const userId = getUserId();
    if (!userId) {
      return undefined;
    }

    const recurringExpensesRef = collection(firestore, RECURRING_EXPENSES_TABLE_NAME);
    const recurringExpensesQuery = query(recurringExpensesRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(recurringExpensesQuery);
    const recurringExpenses = querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as unknown as IRecurringExpense
    );

    return recurringExpenses;
  } catch (err: any) {
    console.error(err);
    Toast.show({
      type: "error",
      text1: "Error",
      text2: err.message,
    });
  }
};

export const addRecurringExpense = async (recurringExpense: IRecurringExpense) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return undefined;
    }

    recurringExpense.userId = userId;
    const recurringExpensesRef = collection(
      firestore,
      RECURRING_EXPENSES_TABLE_NAME
    );
    delete recurringExpense.id;
    await addDoc(recurringExpensesRef, recurringExpense);
  } catch (err: any) {
    console.error(err);
    Toast.show({
      type: "error",
      text1: "Error",
      text2: err.message,
    });
  }
};

export const removeRecurringExpense = async (recurringExpenseId: string) => {
  try {
    const recurringExpenseRef = doc(
      firestore,
      RECURRING_EXPENSES_TABLE_NAME,
      recurringExpenseId
    );
    await deleteDoc(recurringExpenseRef);
  } catch (err: any) {
    console.error(err);
    Toast.show({
      type: "error",
      text1: "Error",
      text2: err.message,
    });
  }
};
