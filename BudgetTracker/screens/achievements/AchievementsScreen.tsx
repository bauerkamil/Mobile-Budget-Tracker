import { ScrollView } from "react-native";
import { AchievementsScreenStyle } from "./AchievementsScreen.style";
import { ProgressCard } from "../../components/progress-card/ProgressCard";

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

  return (
    <ScrollView style={AchievementsScreenStyle.container}>
      {mockedAchievements.map((achievement, key) => (
        <ProgressCard
          key={key}
          title={achievement.title}
          subtitle={achievement.subtitle}
          color={achievement.color}
          icon={achievement.icon}
          currentlySpent={achievement.currentlySpent}
          totalBudget={achievement.totalBudget}
        />
      ))}
    </ScrollView>
  );
};
