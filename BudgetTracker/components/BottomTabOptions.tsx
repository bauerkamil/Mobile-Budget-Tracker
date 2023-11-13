import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { Icon } from "react-native-paper";

export const BottomTabOptions = ((props: {
    route: RouteProp<ParamListBase, string>;
    navigation: any;
}): BottomTabNavigationOptions => ({
  tabBarLabel: () => {
    return null;
  },
  tabBarIcon: ({ focused, color, size }) => {
    const { route } = props;
    let iconName;

    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Calendar':
        iconName = 'calendar-account';
        break;
    }

    return <Icon source={iconName} size={size} />;
  },          
  tabBarActiveBackgroundColor: 'purple',
  tabBarInactiveBackgroundColor: 'gray',
}));