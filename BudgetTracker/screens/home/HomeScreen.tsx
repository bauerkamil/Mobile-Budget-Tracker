import { ScrollView, View } from "react-native";
import { IHomeScreenProps } from "./IHomeScreenProps";
import { HomeScreenStyle } from "./HomeScreen.style";
import { ActivityIndicator, MD2Colors, Text } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ICategory } from "../../common/interfaces/ICategory";
import Category from "./components/category/Category";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";

const screenWidth = Dimensions.get("window").width;
const chartConfig: AbstractChartConfig = {
  backgroundGradientFrom: "#6C47F8",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#9141FC",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
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
    id: 1,
    name: "House",
    icon: "home",
    color: "blue",
  },
  {
    id: 2,
    name: "Transport",
    icon: "bus",
    color: "pink",
  },
  {
    id: 3,
    name: "Office",
    icon: "briefcase",
    color: "orange",
  },
  {
    id: 4,
    name: "Education",
    icon: "book",
    color: "purple",
  },
  {
    id: 5,
    name: "Medical",
    icon: "hospital",
    color: "red",
  },
];

export default function HomeScreen(props: IHomeScreenProps) {
  return (
    <View style={HomeScreenStyle.container}>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
      <View style={HomeScreenStyle.title}>
        <Text style={HomeScreenStyle.titleText} variant="titleLarge">
          Welcome, User
        </Text>
      </View>
      <View style={HomeScreenStyle.section}>
        <Text style={HomeScreenStyle.sectionText} variant="titleMedium">
          Top Spending
        </Text>
        <ScrollView horizontal={true} contentContainerStyle={{ columnGap: 10 }}>
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </ScrollView>
      </View>
      <View style={HomeScreenStyle.section}>
        <Text style={HomeScreenStyle.sectionText} variant="titleMedium">
          Categories
        </Text>
        <Text>TODO</Text>
      </View>
    </View>
  );
}
