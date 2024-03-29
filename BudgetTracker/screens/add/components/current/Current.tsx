import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Toast from "react-native-toast-message";
import {
  ICategory,
  ICurrentExpense,
  IScreenProps,
} from "../../../../common/interfaces";
import {
  addCategory,
  getUserCategories,
} from "../../../../services/CategoryService";
import { addCurrentExpense } from "../../../../services/CurrentExpenseService";
import { CurrentStyle } from "./Current.style";
import AddCategory from "./components/add-category/AddCategory";
import AddExpense from "./components/add-expense/AddExpense";
import Category from "./components/category/Category";

const Current = ({ navigation }: IScreenProps) => {
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

    const unsubscribe = navigation.addListener("focus", () => {
      loadCategories();
    });

    return unsubscribe;
  }, [navigation]);

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
      <AddCategory
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
