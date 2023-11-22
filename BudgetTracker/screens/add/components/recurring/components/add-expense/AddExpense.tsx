import { useEffect, useState } from "react";
import { IAddExpenseProps } from "./IAddExpenseProps";
import { Button, Dialog, Icon, Portal, TextInput, Text } from "react-native-paper";
import { AddExpenseStyle } from "./AddExpense.style";
import DropDown from "react-native-paper-dropdown";
import { ICategory, IRecurringExpense } from "../../../../../../common/interfaces";
import CategoryDropdownItem from "./components/category-dropdown-item/CategoryDropdownItem";

const AddExpense: React.FC<IAddExpenseProps> = (props) => {
  const { visible, onDismiss, onAdd } = props;

  const [showCategoryDropDown, setShowCategoryDropDown] = useState(false);
  const [recurringExpense, setRecurringExpense] = useState<IRecurringExpense>({
    id: 0,
    name: "",
    categoryId: 0,
    day: 0,
    value: 0,
  });
  const [categories, setCategories] = useState<ICategory[]>([
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
  ]);
  
  const handleValueChange = (value: string) => {
    if (value === "") {
      setRecurringExpense((c) => ({ ...c, value: 0 }));
      return;
    }
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
      return;
    }
    setRecurringExpense((c) => ({ ...c, value: parsedValue }));
  };

  const handleDayChange = (day: string) => {
    if (day === "") {
      setRecurringExpense((c) => ({ ...c, day: 0 }));
      return;
    }
    const parsedDay = parseInt(day);
    if (isNaN(parsedDay)) {
      return;
    }
    setRecurringExpense((c) => ({ ...c, day: parsedDay }));
  };

  const handleAdd = () => {
    onAdd(recurringExpense);
    setRecurringExpense({
      id: 0,
      name: "",
      categoryId: 0,
      day: 0,
      value: 0,
    });
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>New recurring expense</Dialog.Title>
        <Dialog.Content style={AddExpenseStyle.content}>
          <TextInput
            label="Name"
            onChangeText={(text) =>
              setRecurringExpense((c) => ({ ...c, name: text }))
            }
            value={recurringExpense.name}
          />
          <TextInput
            keyboardType="numeric"
            label="Value (PLN)"
            onChangeText={(text) => handleValueChange(text)}
            value={recurringExpense.value.toString()}
          />
          <TextInput
            keyboardType="numeric"
            label="Day of month"
            onChangeText={(text) => handleDayChange(text)}
            value={recurringExpense.day.toString()}
          />
          <DropDown
            label={"Category"}
            mode={"outlined"}
            visible={showCategoryDropDown}
            showDropDown={() => setShowCategoryDropDown(true)}
            onDismiss={() => setShowCategoryDropDown(false)}
            value={recurringExpense.categoryId}
            setValue={(e: number) => setRecurringExpense((c) => ({ ...c, categoryId: e }))}
            list={categories.map((category) => ({
              label: category.name,
              value: category.id,
              custom: <CategoryDropdownItem category={category} />,
            }))}
          />
          <Button mode="contained" onPress={handleAdd}>
            Add
          </Button>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default AddExpense;
