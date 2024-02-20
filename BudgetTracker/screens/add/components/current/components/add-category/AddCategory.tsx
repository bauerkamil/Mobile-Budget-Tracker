import React, { useState } from "react";
import { IAddCategoryProps } from "./IAddCategoryProps";
import {
  Button,
  Dialog,
  Icon,
  Portal,
  TextInput,
  Text,
} from "react-native-paper";
import { AddCategoryStyle } from "./AddCategory.style";
import DropDown from "react-native-paper-dropdown";
import {
  AvailableColors,
  AvailableIcons,
} from "../../../../../../common/utils/constants";
import { ICategory } from "../../../../../../common/interfaces";
import { View } from "react-native";

const AddCategory: React.FC<IAddCategoryProps> = (props) => {
  const { visible, onDismiss, onAdd } = props;

  const [showColorDropDown, setShowColorDropDown] = useState(false);
  const [showIconDropDown, setShowIconDropDown] = useState(false);

  const [category, setCategory] = useState<ICategory>({
    id: "0",
    limit: 0,
    name: "",
    icon: "",
    color: "",
  });

  const isButtonDisabled =
    category.name === "" ||
    category.limit <= 0 ||
    category.icon === "" ||
    category.color === "";

  const handleLimitChange = (value: string) => {
    if (value === "") {
      setCategory((c) => ({ ...c, limit: 0 }));
      return;
    }

    const parsedValue = parseInt(value);

    if (isNaN(parsedValue)) {
      return;
    }

    setCategory((c) => ({ ...c, limit: parsedValue }));
  };

  const handleAdd = () => {
    onAdd(category);
    setCategory({ id: "0", limit: 0, name: "", icon: "", color: "" });
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>New category</Dialog.Title>
        <Dialog.Content style={AddCategoryStyle.content}>
          <TextInput
            label="Name"
            value={category.name}
            onChange={(e) =>
              setCategory((c) => ({ ...c, name: e.nativeEvent.text }))
            }
          />
          <TextInput
            keyboardType="numeric"
            label="Limit"
            onChange={(e) => handleLimitChange(e.nativeEvent.text)}
            value={category.limit.toString()}
          />
          <DropDown
            label={"Color"}
            mode={"outlined"}
            visible={showColorDropDown}
            showDropDown={() => setShowColorDropDown(true)}
            onDismiss={() => setShowColorDropDown(false)}
            value={category.color}
            setValue={(e: string) =>
              setCategory((c) => {
                return { ...c, color: e };
              })
            }
            list={AvailableColors.map((color) => ({
              label: color,
              value: color,
              custom: (
                <View style={AddCategoryStyle.iconView}>
                  <Icon source={"circle"} size={24} color={color} />
                  <Text>{color}</Text>
                </View>
              ),
            }))}
          />
          <DropDown
            label={"Icon"}
            mode={"outlined"}
            visible={showIconDropDown}
            showDropDown={() => setShowIconDropDown(true)}
            onDismiss={() => setShowIconDropDown(false)}
            value={category.icon}
            setValue={(e: string) =>
              setCategory((c) => {
                return { ...c, icon: e };
              })
            }
            list={AvailableIcons.map((icon) => ({
              label: icon,
              value: icon,
              custom: (
                <View style={AddCategoryStyle.iconView}>
                  <Icon source={icon} size={24} />
                  <Text>{icon}</Text>
                </View>
              ),
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

export default AddCategory;
