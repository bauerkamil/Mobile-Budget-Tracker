import { Button, Dialog, Portal } from "react-native-paper";
import { IRemoveCategoryProps } from "./IRemoveCategoryProps";
import { RemoveCategoryStyle } from "./RemoveCategory.style";

const RemoveCategory: React.FC<IRemoveCategoryProps> = (props) => {
  const { visible, category, onDismiss, onRemove } = props;
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{category.name}</Dialog.Title>
        <Dialog.Content style={RemoveCategoryStyle.content}>
          <Button mode="contained" onPress={() => onRemove(category.id)}>
            Remove
          </Button>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default RemoveCategory;
