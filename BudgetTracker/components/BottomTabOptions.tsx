import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { Icon, MD3Colors } from "react-native-paper";
import Constants from "../common/utils/constants";

export const BottomTabOptions = ((props: {
    route: RouteProp<ParamListBase, string>;
    navigation: any;
}): BottomTabNavigationOptions => ({
  tabBarLabel: () => {
    return null;
  },
  tabBarIcon: ({ focused }) => {
    const { route } = props;
    let iconName,
      size = 28;

    switch (route.name) {
      case Constants.Screens.Home:
        iconName = "home-variant-outline";
        break;
      case Constants.Screens.Calendar:
        iconName = "calendar-month-outline";
        break;
      case Constants.Screens.Add:
        iconName = "plus-box-outline";
        size = 38;
        break;
      case Constants.Screens.Achievements:
        iconName = "trophy-outline";
        break;
      case Constants.Screens.User:
        iconName = "account-outline";
        break;
    }

    return (
      <Icon
        source={iconName}
        size={size}
        color={focused ? MD3Colors.neutral90 : MD3Colors.primary10}
      />
    );
  },
  tabBarActiveBackgroundColor: MD3Colors.primary40,
  tabBarInactiveBackgroundColor: MD3Colors.primary90,
  tabBarStyle: {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    backgroundColor: MD3Colors.primary90,
  },
}));