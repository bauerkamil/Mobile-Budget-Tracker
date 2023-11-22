import { ScrollView } from "react-native";
import { AchievementsScreenStyle } from "./AchievementsScreen.style";
import { ProgressCard } from "../../components/progress-card/ProgressCard";
import { useState, useEffect } from "react";
import { ITransaction, ICategory } from "../../common/interfaces";
import { getUserCategories } from "../../services/CategoryService";
import { getTransactions } from "../../services/TransactionsService";

export const AchievementsScreen = () => {
  const mockedAchievements = [
    {
      title: "Transportation",
      subtitle: "$20 per day",
      color: "#F250FE",
      icon: "car-hatchback",
      currentlySpent: 10,
      totalBudget: 200,
    },
    {
      title: "Education",
      subtitle: "$10 per day",
      color: "#EC4B0B",
      icon: "book-open-page-variant",
      currentlySpent: 35,
      totalBudget: 100,
    },
    {
      title: "Food",
      subtitle: "$40 per day",
      color: "#3D3597",
      icon: "food",
      currentlySpent: 50,
      totalBudget: 40,
    },
    {
      title: "Rent",
      subtitle: "$20 per day",
      color: "#007107",
      icon: "currency-usd",
      currentlySpent: 20,
      totalBudget: 25,
    },
  ];

  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  
  useEffect(() => {
    const loadCategories = async () => {
      const categories = await getUserCategories();
      if (!categories) {
        return;
      }
      setCategories(categories);
    };

    const loadExpenses = async () => {
      const currentDate = new Date();
      const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

      const expenses = await getTransactions(startDate, endDate);
      if (!expenses) {
        setTransactions([]);
      } else
      {
        setTransactions(expenses);
        console.log(expenses);
      }
    };

    loadCategories();
    loadExpenses();
  }, []);

  return (
    <ScrollView style={AchievementsScreenStyle.container}>
      {categories.map((category, key) => (
        <ProgressCard
          key={key}
          title={category.name}
          subtitle={"How much you spent this month:"}
          color={category.color}
          icon={category.icon}
          currentlySpent={20}
          totalBudget={category.limit}
        />
      ))}
    </ScrollView>
  );
};
