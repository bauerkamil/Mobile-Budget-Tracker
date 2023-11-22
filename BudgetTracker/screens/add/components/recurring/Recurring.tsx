import { useState } from "react";
import { FlatList, View } from "react-native";
import { CurrentStyle } from "./Recurring.style";
import Expense from "./components/expense/Expense";
import AddExpense from "./components/add-expense/AddExpense";
import { ICategory, IRecurringExpense } from "../../../../common/interfaces";
import RemoveExpense from "./components/remove-expense/RemoveExpense";
import Toast from "react-native-toast-message";

const Recurring = () => {
  const [addDialogVisible, setAddDialogVisible] = useState(false);
  const [removeDialogVisible, setRemoveDialogVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<IRecurringExpense>();
  const [recurringExpenses, setRecurringExpenses] = useState<
    IRecurringExpense[]
  >([
    {
      id: 1,
      name: "Food",
      categoryId: 1,
      value: 150,
      day: 1,
    },
    {
      id: 2,
      name: "Transport",
      categoryId: 2,
      value: 100,
      day: 2,
    },
    {
      id: 3,
      name: "Entertainment",
      categoryId: 3,
      value: 50,
      day: 3,
    },
    {
      id: 4,
      name: "Health",
      categoryId: 4,
      value: 200,
      day: 4,
    },
    {
      id: 5,
      name: "Bills",
      categoryId: 5,
      value: 300,
      day: 5,
    },
    {
      id: 6,
      name: "Shopping",
      categoryId: 6,
      value: 100,
      day: 6,
    },
    {
      id: 7,
      name: "Education",
      categoryId: 7,
      value: 100,
      day: 7,
    },
    {
      id: 8,
      name: "Gifts",
      categoryId: 8,
      value: 100,
      day: 8,
    },
    {
      id: 9,
      name: "Salary",
      categoryId: 9,
      value: 100,
      day: 9,
    },
    {
      id: -1,
      name: "Add new",
      categoryId: -1,
      value: 0,
      day: 0,
    },
  ]);

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
      setAddDialogVisible(true);
      return;
    }
    const category = recurringExpenses.find((c) => c.id === id);
    if (!category) {
      return;
    }
    setSelectedCategory(category);
    setRemoveDialogVisible(true);
  };

  const handleAddRecurringExpense = (recurringExpense: IRecurringExpense) => {
    setRecurringExpenses((c) => [recurringExpense, ...c]);
    setAddDialogVisible(false);
  };

  const handleRemoveRecurringExpense = (id: number) => {
    setRecurringExpenses((c) => c.filter((c) => c.id !== id));
    setRemoveDialogVisible(false);
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "Selected recurring expense has been removed",
    });
  };

  return (
    <View style={CurrentStyle.container}>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={recurringExpenses}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <Expense
              expense={item}
              categories={categories}
              onClick={handleCategoryClick}
            />
          );
        }}
      />
      <AddExpense
        visible={addDialogVisible}
        onDismiss={() => setAddDialogVisible(false)}
        onAdd={handleAddRecurringExpense}
      />
      {selectedCategory && (
        <RemoveExpense
          visible={removeDialogVisible}
          onDismiss={() => setRemoveDialogVisible(false)}
          expense={selectedCategory}
          onRemove={handleRemoveRecurringExpense}
        />
      )}
    </View>
  );
};

export default Recurring;
