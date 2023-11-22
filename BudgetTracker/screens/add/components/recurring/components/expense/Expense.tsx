import { Pressable, View } from "react-native";
import { IExpenseProps } from "./IExpenseProps";
import { Icon, Text } from "react-native-paper";
import { ExpenseStyle } from "./Expense.style";

const Expense: React.FC<IExpenseProps> = ({ expense, categories, onClick }) => {
  const category = categories.find(
    (category) => category.id === expense.categoryId,
  );
  return (
    <Pressable
      onPress={() => onClick(expense.id!)}
      style={ExpenseStyle.wrapper}
    >
      <View style={ExpenseStyle.container}>
        <View
          style={{ ...ExpenseStyle.icon, backgroundColor: category?.color }}
        >
          <Icon color="white" source={category?.icon} size={25} />
        </View>
        <View>
          <Text variant={"labelLarge"} style={ExpenseStyle.textColor}>
            {expense.name}
          </Text>
          {expense.id !== "-1" && (
            <>
              <Text style={ExpenseStyle.textColor}>
                Day of month: {expense.day}
              </Text>
              <Text style={ExpenseStyle.textColor}>{expense.value} PLN</Text>
            </>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default Expense;
