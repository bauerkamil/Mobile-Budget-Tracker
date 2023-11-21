import { FlatList, View } from "react-native";
import Category from "./components/category/Category";
import { CurrentStyle } from "./Current.style";
import { useState } from "react";
import AddCaterogry from "./components/add-category/AddCategory";
import { ICurrentCategory, IExpense } from "../../../../common/interfaces";
import AddExpense from "./components/add-expense/AddExpense";
import Toast from "react-native-toast-message";

const Current = () => {
  const [categoryDialogVisible, setCategoryDialogVisible] = useState(false);
  const [expenseDialogVisible, setExpenseDialogVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ICurrentCategory>();
  const [categories, setCategories] = useState<ICurrentCategory[]>([
    {
      id: 1,
      name: "Food",
      icon: "food",
      color: "red",
    },
    {
      id: 2,
      name: "Transport",
      icon: "bus",
      color: "blue",
    },
    {
      id: 3,
      name: "Entertainment",
      icon: "cards",
      color: "green",
    },
    {
      id: 4,
      name: "Health",
      icon: "heart",
      color: "gold",
    },
    {
      id: 5,
      name: "Bills",
      icon: "cash",
      color: "purple",
    },
    {
      id: 6,
      name: "Shopping",
      icon: "cart",
      color: "pink",
    },
    {
      id: 7,
      name: "Education",
      icon: "book",
      color: "brown",
    },
    {
      id: 8,
      name: "Gifts",
      icon: "gift",
      color: "black",
    },
    {
      id: 9,
      name: "Salary",
      icon: "cash-multiple",
      color: "grey",
    },
    {
      id: -1,
      name: "Add new",
      icon: "plus",
      color: "orange",
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

  const handleAddCategory = (category: ICurrentCategory) => {
    setCategories((c) => [category, ...c]);
    setCategoryDialogVisible(false);
  };

  const handleAddExpense = (exponse: IExpense) => {
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
