import { View, StyleSheet } from "react-native";
import { Icon, MD3Colors, Text } from "react-native-paper";

import { ITransactionItemProps } from "./ITransactionItemProps";
import { TransactionItemStyle } from "./TransactionItem.style";
import { format } from "date-fns";

export const TransactionItem = ({
  transaction,
  categories,
}: ITransactionItemProps) => {
  const { name, date, value, recurring, categoryId } = transaction;
  const category = categories?.find((category) => category.id === categoryId);
  return (
    <View style={TransactionItemStyle.container}>
      <View
        style={StyleSheet.flatten([
          TransactionItemStyle.iconContainer,
          { backgroundColor: category?.color ?? "black" },
        ])}
      >
        <View style={TransactionItemStyle.iconWrapper}>
          <Icon
            source={category?.icon}
            size={30}
            color={MD3Colors.neutralVariant99}
          />
        </View>
      </View>
      <View style={TransactionItemStyle.titleContainer}>
        <Text variant={"titleMedium"} style={TransactionItemStyle.textColor}>
          {name}
        </Text>
        <Text variant={"labelLarge"} style={TransactionItemStyle.textColor}>
          {format(date, "dd.MM.yyyy")}
          {recurring && " (recurring)"}
        </Text>
      </View>
      <Text
        variant={"titleLarge"}
        style={{
          ...TransactionItemStyle.textColor,
          ...TransactionItemStyle.textBold,
        }}
      >
        {value + " PLN"}
      </Text>
    </View>
  );
};
