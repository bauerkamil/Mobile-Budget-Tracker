import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { Icon, MD3Colors, Text } from "react-native-paper";
import {Constants} from "../../common/utils/constants";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { TabOptionsStyle } from "./TabOptions.style";


export const TabOptions = ((props: {
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
        iconName = "plus-circle-outline";
        size = 38;
        break;
      case Constants.Screens.Achievements:
        iconName = "trophy-outline";
        break;
      case Constants.Screens.User:
        iconName = "account-outline";
        break;
      case Constants.Screens.Login:
        iconName = "account-outline";
        break;
      case Constants.Screens.Register:
        iconName = "account-outline";
        break;
      default:
        return undefined;
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
    // @ts-ignore
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    backgroundColor: MD3Colors.primary90,
  },
  title: "Budget Tracker", 
  headerTitleAlign: "center", 
  header: () => {
    const { route } = props;
    const title = "Budget Tracker";

    switch (route.name) {
      case Constants.Screens.Home:
        return (
          <View style={StyleSheet.flatten([TabOptionsStyle.header, {borderBottomWidth: 0}])}>
            <LinearGradient
            colors={["#6C47F8", "#9141FC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={TabOptionsStyle.homeScreenHeader}
            >
            <Text style={TabOptionsStyle.whiteHeaderTitle}>{title}</Text>
          </LinearGradient>
        </View>
        );
      case Constants.Screens.Calendar:
        return (
          <View style={StyleSheet.flatten([TabOptionsStyle.header, TabOptionsStyle.calendarScreenHeader])}>
            <Text style={TabOptionsStyle.whiteHeaderTitle}>{title}</Text>
          </View>
        );
      case Constants.Screens.Add:
        return (
          <View style={StyleSheet.flatten([TabOptionsStyle.header, {backgroundColor: "#fff", borderBottomWidth: 0}])}>
            <Text style={TabOptionsStyle.headerTitle}>{title}</Text>
          </View>
        );
      default:
        return (
          <View style={TabOptionsStyle.header}>
            <Text style={TabOptionsStyle.headerTitle}>{title}</Text>
          </View>
        );
    }
  },
}));
