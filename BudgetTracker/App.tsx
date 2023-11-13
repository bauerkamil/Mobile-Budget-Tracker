import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Icon, MD3Colors, PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/home/HomeScreen";
import CalendarScreen from "./screens/calendar/CalendarScreen";
import UserScreen from "./screens/user/UserScreen";
import { AchievementsScreen } from "./screens/achievements/AchievementsScreen";
import AddScreen from "./screens/add/AddScreen";
import Constants from "./common/utils/constants";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={Constants.Screens.Home}
          screenOptions={({ route }) => ({
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ focused }) => {
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
          })}
        >
          <Tab.Screen name={Constants.Screens.Home} component={HomeScreen} />
          <Tab.Screen
            name={Constants.Screens.Calendar}
            component={CalendarScreen}
          />
          <Tab.Screen name={Constants.Screens.Add} component={AddScreen} />
          <Tab.Screen
            name={Constants.Screens.Achievements}
            component={AchievementsScreen}
          />
          <Tab.Screen name={Constants.Screens.User} component={UserScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
