import { ScrollView } from "react-native";
import { AchievementsScreenStyle } from "./AchievementsScreen.style";
import { ProgressCard } from "../../components/progress-card/ProgressCard";
import { useEffect, useState } from "react";
import { groupTransactionsByCategory } from "../../common/utils/helpers";
import { getUserCategories } from "../../services/CategoryService";
import { getTransactions } from "../../services/TransactionsService";
import { ICategoryExpenses } from "../../common/interfaces/ICategoryExpenses";
import { NoData } from "../../components/no-data/NoData";

export const AchievementsScreen = () => {
  const [categoryExpenses, setCategoryExpenses] = useState<ICategoryExpenses[]>([]);
  
  useEffect(() => {
    const loadCategories = async () => {
      const currentDate = new Date();
      const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

      const categories = await getUserCategories();
      const expenses = await getTransactions(startDate, endDate);
      if (!categories) {
        return;
      }
      if (!expenses || !categories) {
        setCategoryExpenses([]);
        return;
      }
      const categoryExpenses = groupTransactionsByCategory(expenses, categories);
      setCategoryExpenses(categoryExpenses);
    };

    loadCategories();
  }, []);


  return (
    <ScrollView style={AchievementsScreenStyle.container}>
      {categoryExpenses && categoryExpenses.length > 0 ? 
      (
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
      ) : (<NoData />)}
    </ScrollView>
  );
};
