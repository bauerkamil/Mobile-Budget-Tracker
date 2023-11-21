import { View } from "react-native";
import { Icon, Text } from "react-native-paper";

import { ITransactionItemProps } from "./ITransactionItemProps";
import { TransactionItemStyle } from "./TransactionItem.style";

export const TransactionItem = ({
  title,
  date,
  amount,
  icon,
}: ITransactionItemProps) => {
  return (
    <View style={TransactionItemStyle.container}>
      <View style={TransactionItemStyle.iconContainer}>
        <View style={TransactionItemStyle.iconWrapper}>
          <Icon source={icon} size={30} color={"#FFA502"} />
        </View>
      </View>
      <View style={TransactionItemStyle.titleContainer}>
        <Text variant={"titleMedium"} style={TransactionItemStyle.textColor}>
          {title}
        </Text>
        <Text variant={"labelLarge"} style={TransactionItemStyle.textColor}>
          {date}
        </Text>
      </View>
      <Text
        variant={"titleLarge"}
        style={{
          ...TransactionItemStyle.textColor,
          ...TransactionItemStyle.textBold,
        }}
      >
        {amount + " PLN"}
      </Text>
    </View>
  );
};
