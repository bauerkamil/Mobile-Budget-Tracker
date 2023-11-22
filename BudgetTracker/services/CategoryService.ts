import {
  addDoc,
  collection,
  getDocs,
  or,
  query,
  where,
} from "firebase/firestore";

import { firestore } from "./firebaseinit";
import { ICategory } from "../common/interfaces";
import { getUserId } from "./AuthService";
import Toast from "react-native-toast-message";

const CATEGORY_TABLE_NAME = "Categories";

export const getUserCategories = async (): Promise<ICategory[] | undefined> => {
  try {
    const userId = getUserId();
    if (!userId) {
      return undefined;
    }

  const categoriesRef = collection(firestore, CATEGORY_TABLE_NAME);
  const categoriesQuery = query(categoriesRef, where("userId", "==", "-1"));
  const querySnapshot = await getDocs(categoriesQuery);
  const categories = querySnapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() } as unknown as ICategory));

    return categories;
  } catch (err: any) {
    console.error(err);
    Toast.show({
      type: "error",
      text1: "Error",
      text2: err.message,
    });
  }
};

export const addCategory = async (category: ICategory) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return undefined;
    }

    category.userId = userId;
    const categoriesRef = collection(firestore, CATEGORY_TABLE_NAME);
    delete category.id;
    await addDoc(categoriesRef, category);
  } catch (err: any) {
    console.error(err);
    Toast.show({
      type: "error",
      text1: "Error",
      text2: err.message,
    });
  }
};
