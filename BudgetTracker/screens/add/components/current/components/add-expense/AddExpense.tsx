import React, { useState } from "react";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { ICurrentExpense } from "../../../../../../common/interfaces";
import { AddExpenseStyle } from "./AddExpense.style";
import { IAddExpenseProps } from "./IAddExpenseProps";

const AddExpense: React.FC<IAddExpenseProps> = (props) => {
  const { visible, category, onDismiss, onAdd } = props;

  const [value, setValue] = useState(0);
  const [name, setName] = useState("");

  const isButtonDisabled = value <= 0 && name === "";

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
      name: name,
      value: value,
      date: new Date(),
    };
    onAdd(expense);
    setValue(0);
    setName("");
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>New expense: {category.name}</Dialog.Title>
        <Dialog.Content style={AddExpenseStyle.content}>
          <TextInput
            label="Name"
            onChangeText={(text) => setName(text)}
            value={name}
          />
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
