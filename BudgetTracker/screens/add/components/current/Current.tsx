import { FlatList, View } from "react-native";
import Category from "./components/category/Category";
import { CurrentStyle } from "./Current.style";
import { useState } from "react";
import AddCaterogry from "./components/add-category/AddCategory";
import { ICategory, ICurrentExpense } from "../../../../common/interfaces";
import AddExpense from "./components/add-expense/AddExpense";
import Toast from "react-native-toast-message";

const Current = () => {
  const [categoryDialogVisible, setCategoryDialogVisible] = useState(false);
  const [expenseDialogVisible, setExpenseDialogVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>();
  const [categories, setCategories] = useState<ICategory[]>([
    {
      id: 1,
      name: "Food",
      icon: "food",
      color: "red",
      limit: 100,
    },
    {
      id: 2,
      name: "Transport",
      icon: "bus",
      color: "blue",
      limit: 200,
    },
    {
      id: 3,
      name: "Entertainment",
      icon: "cards",
      color: "green",
      limit: 300,
    },
    {
      id: 4,
      name: "Health",
      icon: "heart",
      color: "gold",
      limit: 400,
    },
    {
      id: 5,
      name: "Bills",
      icon: "cash",
      color: "purple",
      limit: 500,
    },
    {
      id: 6,
      name: "Shopping",
      icon: "cart",
      color: "pink",
      limit: 600,
    },
    {
      id: 7,
      name: "Education",
      icon: "book",
      color: "brown",
      limit: 700,
    },
    {
      id: 8,
      name: "Gifts",
      icon: "gift",
      color: "black",
      limit: 800,
    },
    {
      id: 9,
      name: "Salary",
      icon: "cash-multiple",
      color: "grey",
      limit: 900,
    },
    {
      id: -1,
      name: "Add new",
      icon: "plus",
      color: "orange",
      limit: -1,
    },
  ]);

  const handleCategoryClick = (id: number) => {
    if (id === -1) {
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

  const handleAddCategory = (category: ICategory) => {
    setCategories((c) => [category, ...c]);
    setCategoryDialogVisible(false);
  };

  const handleAddExpense = (expense: ICurrentExpense) => {
    setExpenseDialogVisible(false);
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "Your expense has been added",
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
