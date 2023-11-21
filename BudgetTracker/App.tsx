import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MD3Colors, PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/home/HomeScreen";
import CalendarScreen from "./screens/calendar/CalendarScreen";
import UserScreen from "./screens/user/UserScreen";
import { BottomTabOptions } from "./components/tab-options/BottomTabOptions";
import { AchievementsScreen } from "./screens/achievements/AchievementsScreen";
import AddScreen from "./screens/add/AddScreen";
import Constants from "./common/utils/constants";
import { HeaderOptions } from "./components/tab-options/HeaderOptions";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={Constants.Screens.Home}
          screenOptions={BottomTabOptions}
        >
          <Tab.Screen
            name={Constants.Screens.Home}
            component={HomeScreen}
            options={HeaderOptions}
          />
          <Tab.Screen
            name={Constants.Screens.Calendar}
            component={CalendarScreen}
            options={HeaderOptions}
          />
          <Tab.Screen
            name={Constants.Screens.Add}
            component={AddScreen}
            options={HeaderOptions}
          />
          <Tab.Screen
            name={Constants.Screens.Achievements}
            component={AchievementsScreen}
            options={HeaderOptions}
          />
          <Tab.Screen
            name={Constants.Screens.User}
            component={UserScreen}
            options={HeaderOptions}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
