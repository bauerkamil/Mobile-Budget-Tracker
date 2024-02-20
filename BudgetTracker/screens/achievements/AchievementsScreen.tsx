import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { IScreenProps } from "../../common/interfaces";
import { ICategoryExpenses } from "../../common/interfaces/ICategoryExpenses";
import { groupTransactionsByCategory } from "../../common/utils/helpers";
import { NoData } from "../../components/no-data/NoData";
import { ProgressCard } from "../../components/progress-card/ProgressCard";
import { getUserCategories } from "../../services/CategoryService";
import { getTransactions } from "../../services/TransactionsService";
import { AchievementsScreenStyle } from "./AchievementsScreen.style";

export const AchievementsScreen = ({ navigation }: IScreenProps) => {
  const [categoryExpenses, setCategoryExpenses] = useState<ICategoryExpenses[]>(
    [],
  );

  useEffect(() => {
    const loadCategories = async () => {
      const currentDate = new Date();
      const startDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1,
      );
      const endDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      );

      const categories = await getUserCategories();
      const expenses = await getTransactions(startDate, endDate);

      if (!categories) {
        return;
      }

      if (!expenses || !categories) {
        setCategoryExpenses([]);
        return;
      }

      const categoryExpenses = groupTransactionsByCategory(
        expenses,
        categories,
      );

      setCategoryExpenses(categoryExpenses);
    };

    const unsubscribe = navigation.addListener("focus", () => {
      loadCategories();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={AchievementsScreenStyle.container}>
      {categoryExpenses && categoryExpenses.length > 0 ? (
        categoryExpenses.map((achievement, key) => (
          <ProgressCard
            key={key}
            title={achievement.name}
            color={achievement.color}
            icon={achievement.icon}
            currentlySpent={achievement.value}
            totalBudget={achievement.limit}
          />
        ))
      ) : (
        <NoData />
      )}
    </ScrollView>
  );
};
