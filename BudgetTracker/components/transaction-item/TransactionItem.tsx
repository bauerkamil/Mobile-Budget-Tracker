import { View } from "react-native";
import { Icon, Text } from "react-native-paper";

import { ITransactionItemProps } from "./ITransactionItemProps";
import { TransactionItemStyle } from "./TransactionItem.style";
import { format } from "date-fns";

export const TransactionItem = ({
  transaction,
  categoryId,
  categories,
}: ITransactionItemProps) => {
  const { name, date, value, recurring } = transaction;
  const icon = categories?.find((category) => category.id === categoryId)?.icon;
  return (
    <View style={TransactionItemStyle.container}>
      <View style={TransactionItemStyle.iconContainer}>
        <View style={TransactionItemStyle.iconWrapper}>
          <Icon source={icon} size={30} color={"#FFA502"} />
        </View>
      </View>
      <View style={TransactionItemStyle.titleContainer}>
        <Text variant={"titleMedium"} style={TransactionItemStyle.textColor}>
          {name}
        </Text>
        <Text variant={"labelLarge"} style={TransactionItemStyle.textColor}>
          {format(date, "dd.MM.yyyy")}{recurring && " (recurring)"}
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
