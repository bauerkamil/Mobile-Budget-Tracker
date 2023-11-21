import { useState } from "react";
import { IAddCategoryProps } from "./IAddCategoryProps";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { AddCategoryStyle } from "./AddCategory.style";
import DropDown from "react-native-paper-dropdown";
import {
  AvailableColors,
  AvailableIcons,
} from "../../../../../../common/utils/constants";
import { ICurrentCategory } from "../../../../../../common/interfaces";

const AddCaterogry: React.FC<IAddCategoryProps> = (props) => {
  const { visible, onDismiss, onAdd } = props;

  const [showColorDropDown, setShowColorDropDown] = useState(false);
  const [showIconDropDown, setShowIconDropDown] = useState(false);

  const [category, setCategory] = useState<ICurrentCategory>({
    id: 0,
    name: "",
    icon: "",
    color: "",
  });

  const handleAdd = () => {
    onAdd(category);
    setCategory({ id: 0, name: "", icon: "", color: "" });
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

export default AddCaterogry;
