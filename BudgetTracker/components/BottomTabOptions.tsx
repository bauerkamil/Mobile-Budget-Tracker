import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { Icon } from "react-native-paper";
import Constants from "../common/utils/constants";

export const BottomTabOptions = ((props: {
    route: RouteProp<ParamListBase, string>;
    navigation: any;
}): BottomTabNavigationOptions => ({
  tabBarLabel: () => {
    return null;
  },
  tabBarIcon: ({ size }) => {
    const { route } = props;
    let iconName;

    switch (route.name) {
      case Constants.Screens.Home:
        iconName = "home";
        break;
      case Constants.Screens.Calendar:
        iconName = "calendar-account";
        break;
      case Constants.Screens.Add:
        iconName = "plus";
        break;
      case Constants.Screens.Achievements:
        iconName = "chart-bar";
        break;
      case Constants.Screens.User:
        iconName = "account";
        break;
    }

    return <Icon source={iconName} size={size} />;
  },
  tabBarActiveBackgroundColor: "gray",
  tabBarInactiveBackgroundColor: "darkgray",
}));