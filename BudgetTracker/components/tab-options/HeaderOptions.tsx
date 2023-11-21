import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { RouteProp, ParamListBase } from "@react-navigation/native";
import { MD3Colors } from "react-native-paper";

export const HeaderOptions = (props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}): BottomTabNavigationOptions => ({
  title: "Budget Tracker",
  headerTitleAlign: "center",
  headerTitleStyle: getHeaderTitleStyle(props.route),
  headerStyle: getHeaderStyle(props.route),
});

const getHeaderTitleStyle = (route: RouteProp<ParamListBase, string>): any => {
  if (route.name === "Calendar" || route.name === "Home") {
    return {
      color: MD3Colors.neutralVariant99,
      fontSize: 20,
      fontWeight: "bold",
    };
  } else {
    return { fontSize: 20, fontWeight: "bold" };
  }
};

const getHeaderStyle = (route: RouteProp<ParamListBase, string>): any => {
  if (route.name === "Home") {
    return { backgroundColor: "#7D44FA" };
  } else if (route.name === "Calendar") {
    return { backgroundColor: MD3Colors.primary40 };
  } else {
    return undefined;
  }
};
