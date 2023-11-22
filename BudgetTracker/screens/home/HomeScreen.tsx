import { ScrollView, View } from "react-native";
import { Dimensions } from "react-native";
import { Text } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";

import { IHomeScreenProps } from "./IHomeScreenProps";
import { HomeScreenStyle } from "./HomeScreen.style";
import { ICategory } from "../../common/interfaces";
import Category from "./components/category/Category";
import { ProgressCard } from "../../components/progress-card/ProgressCard";

const screenWidth = Dimensions.get("window").width + 50;
const chartConfig = {
  backgroundGradientFrom: "#6C47F8",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#9141FC",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      data: [20, 45, 48, 80, 99, 43],
    },
  ],
};

const categories: ICategory[] = [
  {
    id: "1",
    name: "House",
    icon: "home",
    color: "blue",
    limit: 200,
  },
  {
    id: "2",
    name: "Transport",
    icon: "bus",
    color: "pink",
    limit: 100,
  },
  {
    id: "3",
    name: "Office",
    icon: "briefcase",
    color: "orange",
    limit: 50,
  },
  {
    id: "4",
    name: "Education",
    icon: "book",
    color: "purple",
    limit: 150,
  },
  {
    id: "5",
    name: "Medical",
    icon: "hospital",
    color: "red",
    limit: 100,
  },
];

const mockedCategories = [
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

export default function HomeScreen(_props: IHomeScreenProps) {
  return (
    <View style={HomeScreenStyle.container}>
      <ScrollView contentContainerStyle={HomeScreenStyle.wrapper}>
        <LinearGradient
          colors={["#6C47F8", "#9141FC"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={HomeScreenStyle.budgetHeader}
        >
          <Text style={HomeScreenStyle.budgetText} variant="displayMedium">
            50 PLN
          </Text>
          <Text style={HomeScreenStyle.budgetText} variant="titleLarge">
            For today
          </Text>
        </LinearGradient>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
          withInnerLines={false}
          withOuterLines={false}
          // @ts-ignore
          style={HomeScreenStyle.lineChartStyle}
          formatYLabel={() => ""}
        />
        <View style={HomeScreenStyle.title}>
          <Text
            style={{
              ...HomeScreenStyle.titleText,
              ...HomeScreenStyle.textColor,
            }}
            variant="headlineSmall"
          >
            Welcome, User
          </Text>
        </View>
        <View style={HomeScreenStyle.section}>
          <Text
            style={{
              ...HomeScreenStyle.sectionText,
              ...HomeScreenStyle.textColor,
            }}
            variant="titleMedium"
          >
            Top Spending
          </Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ columnGap: 10 }}
          >
            {categories.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </ScrollView>
        </View>
        <View style={HomeScreenStyle.section}>
          <Text
            style={{
              ...HomeScreenStyle.sectionText,
              ...HomeScreenStyle.textColor,
            }}
            variant="titleMedium"
          >
            Categories
          </Text>
          {mockedCategories.map((category, key) => (
            <ProgressCard
              key={key}
              title={category.title}
              subtitle={category.subtitle}
              color={category.color}
              icon={category.icon}
              currentlySpent={category.currentlySpent}
              totalBudget={category.totalBudget}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
