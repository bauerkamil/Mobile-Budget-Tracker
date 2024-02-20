import { Button, Dialog, Portal } from "react-native-paper";

import { IRemoveExpenseProps } from "./IRemoveExpenseProps";
import { RemoveExpenseStyle } from "./RemoveExpense.style";
import React from "react";

const RemoveExpense: React.FC<IRemoveExpenseProps> = (props) => {
  const { visible, expense: category, onDismiss, onRemove } = props;

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={onDismiss}
        style={RemoveExpenseStyle.container}
      >
        <Dialog.Title style={RemoveExpenseStyle.text}>
          Delete {category.name}?
        </Dialog.Title>
        <Dialog.Content style={RemoveExpenseStyle.content}>
          <Button mode="contained" onPress={() => onRemove(category.id!)}>
            Remove
          </Button>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default RemoveExpense;
