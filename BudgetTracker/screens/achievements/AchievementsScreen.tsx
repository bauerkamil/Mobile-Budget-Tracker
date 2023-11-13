import { ScrollView, View } from "react-native";
import { Card, Icon, MD3Colors, ProgressBar, Text } from "react-native-paper";
import { AchievementsScreenStyle } from "./AchievementsScreen.style";

export const AchievementsScreen = () => {
  const mockedAchievements = [
    {
      title: "Transportation",
      subtitle: "$20 per day",
      progress: 0.4,
      color: "#F250FE",
      icon: "car-hatchback",
    },
    {
      title: "Education",
      subtitle: "$10 per day",
      progress: 1.2,
      color: "#EC4B0B",
      icon: "book-open-page-variant",
    },
    {
      title: "Food",
      subtitle: "$40 per day",
      progress: 0.8,
      color: "#3D3597",
      icon: "food",
    },
    {
      title: "Rent",
      subtitle: "$20 per day",
      progress: 0.4,
      color: "#007107",
      icon: "currency-usd",
    },
  ];

  return (
    <ScrollView style={AchievementsScreenStyle.container}>
      {mockedAchievements.map((achievement) => (
        <Card style={AchievementsScreenStyle.card}>
          <Card.Content>
            <View style={AchievementsScreenStyle.titleContainer}>
              <View style={AchievementsScreenStyle.iconContainer}>
                <View style={AchievementsScreenStyle.iconWrapper}>
                  <Icon
                    source={achievement.icon}
                    color={achievement.color}
                    size={20}
                  />
                </View>
              </View>
              <View>
                <Text
                  variant={"titleLarge"}
                  style={AchievementsScreenStyle.titleFont}
                >
                  {achievement.title}
                </Text>
                <Text variant={"labelLarge"}>{achievement.subtitle}</Text>
              </View>
            </View>
          </Card.Content>
          <Card.Content>
            <View style={AchievementsScreenStyle.progressBarContainer}>
              <ProgressBar
                progress={achievement.progress}
                color={achievement.color}
                style={AchievementsScreenStyle.progressBar}
              />
            </View>
          </Card.Content>
          <Card.Content>
            {achievement.progress > 0 && achievement.progress < 1 ? (
              <View style={AchievementsScreenStyle.statusContainer}>
                <Icon
                  source="check-circle"
                  color={MD3Colors.primary0}
                  size={20}
                />
                <Text variant={"labelLarge"}>You're on track!</Text>
              </View>
            ) : (
              <View style={AchievementsScreenStyle.statusContainer}>
                <Icon
                  source="close-circle"
                  color={MD3Colors.error50}
                  size={20}
                />
                <Text variant={"labelLarge"}>
                  Uh oh! You exceeded your budget
                </Text>
              </View>
            )}
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};
