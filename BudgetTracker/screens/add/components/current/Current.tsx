import { FlatList, View } from "react-native";
import Category from "./components/category/Category";
import { CurrentStyle } from "./Current.style";
import { useEffect, useState } from "react";
import AddCaterogry from "./components/add-category/AddCategory";
import { ICategory, ICurrentExpense } from "../../../../common/interfaces";
import AddExpense from "./components/add-expense/AddExpense";
import Toast from "react-native-toast-message";
import {
  addCategory,
  getUserCategories,
} from "../../../../services/CategoryService";
import { addCurrentExpense } from "../../../../services/CurrentExpenseService";

const Current = () => {
  const [categoryDialogVisible, setCategoryDialogVisible] = useState(false);
  const [expenseDialogVisible, setExpenseDialogVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>();
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const categories = await getUserCategories();
      if (!categories) {
        return;
      }
      setCategories([
        ...categories,
        { id: "-1", name: "Add new", icon: "plus", color: "orange", limit: 0 },
      ]);
    };

    loadCategories();
  }, []);

  const handleCategoryClick = (id: string) => {
    if (id === "-1") {
      setCategoryDialogVisible(true);
      return;
    }
    const category = categories.find((c) => c.id === id);
    if (!category) {
      return;
    }

    setSelectedCategory(category);
    setExpenseDialogVisible(true);
  };

  const handleAddCategory = async (category: ICategory) => {
    const id = await addCategory(category);
    category.id = id;
    setCategories((c) => [category, ...c]);
    setCategoryDialogVisible(false);
  };

  const handleAddExpense = (currentExpense: ICurrentExpense) => {
    setExpenseDialogVisible(false);
    addCurrentExpense(currentExpense)
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Expense has been added",
        });
      })
      .catch(() => {
        Toast.show({
          type: "error",
          text1: "Something went wrong",
          text2: "Expense has not been added",
        });
      });
  };

  return (
    <View style={CurrentStyle.container}>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={categories}
        numColumns={2}
        renderItem={({ item }) => {
          return <Category category={item} onClick={handleCategoryClick} />;
        }}
      />
      <AddCaterogry
        visible={categoryDialogVisible}
        onDismiss={() => setCategoryDialogVisible(false)}
        onAdd={handleAddCategory}
      />
      {selectedCategory && (
        <AddExpense
          visible={expenseDialogVisible}
          category={selectedCategory}
          onDismiss={() => setExpenseDialogVisible(false)}
          onAdd={handleAddExpense}
        />
      )}
    </View>
  );
};

export default Current;
