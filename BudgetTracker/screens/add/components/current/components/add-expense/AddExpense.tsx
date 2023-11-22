import { IAddExpenseProps } from "./IAddExpenseProps";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { AddExpenseStyle } from "./AddExpense.style";
import { useState } from "react";
import { ICurrentExpense } from "../../../../../../common/interfaces";

const AddExpense: React.FC<IAddExpenseProps> = (props) => {
  const { visible, category, onDismiss, onAdd } = props;

  const [value, setValue] = useState(0);

  const isButtonDisabled = value <= 0;

  const handleValueChange = (value: string) => {
    if (value === "") {
      setValue(0);
      return;
    }
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
      return;
    }
    setValue(parsedValue);
  };

  const handleAdd = () => {
    const expense: ICurrentExpense = {
      categoryId: category.id ?? "",
      value: value,
      date: new Date(),
    };
    onAdd(expense);
    setValue(0);
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>New expense: {category.name}</Dialog.Title>
        <Dialog.Content style={AddExpenseStyle.content}>
          <TextInput
            keyboardType="numeric"
            label="Value (PLN)"
            onChange={(e) => handleValueChange(e.nativeEvent.text)}
            value={value.toString()}
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
