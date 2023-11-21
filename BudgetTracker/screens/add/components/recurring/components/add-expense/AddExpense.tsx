import { useState } from "react";
import { IAddExpenseProps } from "./IAddExpenseProps";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { AddExpenseStyle } from "./AddExpense.style";
import DropDown from "react-native-paper-dropdown";
import {
  AvailableColors,
  AvailableIcons,
} from "../../../../../../common/utils/constants";
import { IRecurringExpense } from "../../../../../../common/interfaces";

const AddExpense: React.FC<IAddExpenseProps> = (props) => {
  const { visible, onDismiss, onAdd } = props;

  const [showColorDropDown, setShowColorDropDown] = useState(false);
  const [showIconDropDown, setShowIconDropDown] = useState(false);
  const [category, setCategory] = useState<IRecurringExpense>({
    id: 0,
    name: "",
    icon: "",
    color: "",
    day: 0,
    value: 0,
  });

  const handleValueChange = (value: string) => {
    if (value === "") {
      setCategory((c) => ({ ...c, value: 0 }));
      return;
    }
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
      return;
    }
    setCategory((c) => ({ ...c, value: parsedValue }));
  };

  const handleDayChange = (day: string) => {
    if (day === "") {
      setCategory((c) => ({ ...c, day: 0 }));
      return;
    }
    const parsedDay = parseInt(day);
    if (isNaN(parsedDay)) {
      return;
    }
    setCategory((c) => ({ ...c, day: parsedDay }));
  };

  const handleAdd = () => {
    onAdd(category);
    setCategory({
      id: 0,
      name: "",
      icon: "",
      color: "",
      day: 0,
      value: 0,
    });
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>New category</Dialog.Title>
        <Dialog.Content style={AddExpenseStyle.content}>
          <TextInput
            label="Name"
            onChange={(e) =>
              setCategory((c) => ({ ...c, name: e.nativeEvent.text }))
            }
            value={category.name}
          />
          <TextInput
            keyboardType="numeric"
            label="Value (PLN)"
            onChange={(e) => handleValueChange(e.nativeEvent.text)}
            value={category.value.toString()}
          />
          <TextInput
            keyboardType="numeric"
            label="Day of month"
            onChange={(e) => handleDayChange(e.nativeEvent.text)}
            value={category.day.toString()}
          />
          <DropDown
            label={"Color"}
            mode={"outlined"}
            visible={showColorDropDown}
            showDropDown={() => setShowColorDropDown(true)}
            onDismiss={() => setShowColorDropDown(false)}
            value={category.color}
            setValue={(e: string) => setCategory((c) => ({ ...c, color: e }))}
            list={AvailableColors.map((color) => ({
              label: color,
              value: color,
            }))}
          />
          <DropDown
            label={"Icon"}
            mode={"outlined"}
            visible={showIconDropDown}
            showDropDown={() => setShowIconDropDown(true)}
            onDismiss={() => setShowIconDropDown(false)}
            value={category.icon}
            setValue={(e: string) => setCategory((c) => ({ ...c, icon: e }))}
            list={AvailableIcons.map((color) => ({
              label: color,
              value: color,
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
