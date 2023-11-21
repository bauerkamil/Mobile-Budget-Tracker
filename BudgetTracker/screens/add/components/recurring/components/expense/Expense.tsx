import { Pressable, View } from "react-native";
import { IExpenseProps } from "./IExpenseProps";
import { Icon, Text } from "react-native-paper";
import { ExpenseStyle } from "./Exepnse.style";

const Expense: React.FC<IExpenseProps> = ({ expense: category, onClick }) => {
  return (
    <Pressable
      onPress={() => onClick(category.id)}
      style={ExpenseStyle.wrapper}
    >
      <View style={ExpenseStyle.container}>
        <View style={{ ...ExpenseStyle.icon, backgroundColor: category.color }}>
          <Icon color="white" source={category.icon} size={25} />
        </View>
        <View>
          <Text variant={"labelLarge"} style={ExpenseStyle.textColor}>
            {category.name}
          </Text>
          {category.id !== -1 && (
            <>
              <Text>Day of month: {category.day}</Text>
              <Text style={ExpenseStyle.textColor}>{category.value} PLN</Text>
            </>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default Expense;
