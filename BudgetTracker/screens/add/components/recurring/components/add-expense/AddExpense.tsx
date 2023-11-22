import { useState } from "react";
import { IAddExpenseProps } from "./IAddExpenseProps";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { AddExpenseStyle } from "./AddExpense.style";
import DropDown from "react-native-paper-dropdown";
import { IRecurringExpense } from "../../../../../../common/interfaces";
import CategoryDropdownItem from "./components/category-dropdown-item/CategoryDropdownItem";

const AddExpense: React.FC<IAddExpenseProps> = (props) => {
  const { visible, categories, onDismiss, onAdd } = props;

  const [showCategoryDropDown, setShowCategoryDropDown] = useState(false);
  const [recurringExpense, setRecurringExpense] = useState<IRecurringExpense>({
    id: "0",
    name: "",
    categoryId: "-1",
    day: 1,
    value: 0,
  });

  const isButtonDisabled =
    recurringExpense.name === "" ||
    recurringExpense.value <= 0 ||
    recurringExpense.categoryId === "-1";

  const handleNameChange = (name: string) => {
    if (name === "") {
      setRecurringExpense((c) => ({ ...c, name: "" }));
      return;
    }

    setRecurringExpense((c) => ({ ...c, name: name }));
  };

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
      setRecurringExpense((c) => ({ ...c, day: 1 }));
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
      id: "0",
      name: "",
      categoryId: "0",
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
            onChangeText={handleNameChange}
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
            setValue={(e: string) =>
              setRecurringExpense((c) => ({ ...c, categoryId: e }))
            }
            list={categories.map((category) => ({
              label: category.name,
              value: category.id ?? "",
              custom: <CategoryDropdownItem category={category} />,
            }))}
          />
          <Button
            mode="contained"
            onPress={handleAdd}
            disabled={isButtonDisabled}
          >
            Add
          </Button>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default AddExpense;
