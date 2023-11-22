import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { CurrentStyle } from "./Recurring.style";
import Expense from "./components/expense/Expense";
import AddExpense from "./components/add-expense/AddExpense";
import { ICategory, IRecurringExpense } from "../../../../common/interfaces";
import RemoveExpense from "./components/remove-expense/RemoveExpense";
import Toast from "react-native-toast-message";
import { getUserCategories } from "../../../../services/CategoryService";
import {
  addRecurringExpense,
  getUserRecurringExpenses,
  removeRecurringExpense,
} from "../../../../services/RecurringExpenseService";

const Recurring = () => {
  const [addDialogVisible, setAddDialogVisible] = useState(false);
  const [removeDialogVisible, setRemoveDialogVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<IRecurringExpense>();
  const [recurringExpenses, setRecurringExpenses] = useState<
    IRecurringExpense[]
  >([]);

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
    const loadExpenses = async () => {
      const expenses = await getUserRecurringExpenses();
      if (!expenses) {
        return;
      }
      setRecurringExpenses([
        ...expenses,
        { id: "-1", name: "Add new", categoryId: "-1", value: 0, day: 0 },
      ]);
    };

    loadCategories();
    loadExpenses();
  }, []);

  const handleCategoryClick = (id: string) => {
    if (id === "-1") {
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
    setAddDialogVisible(false);
    addRecurringExpense(recurringExpense)
      .then((id) => {
        recurringExpense.id = id;
        setRecurringExpenses((c) => [recurringExpense, ...c]);
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

  const handleRemoveRecurringExpense = (id: string) => {
    setRemoveDialogVisible(false);
    removeRecurringExpense(id)
      .then(() => {
        setRecurringExpenses((c) => c.filter((c) => c.id !== id));
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Selected recurring expense has been removed",
        });
      })
      .catch(() => {
        Toast.show({
          type: "error",
          text1: "Something went wrong",
          text2: "Selected recurring expense has not been removed",
        });
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
        categories={categories.filter((c) => c.id !== "-1")}
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
