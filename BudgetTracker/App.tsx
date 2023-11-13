import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/home/HomeScreen";
import CalendarScreen from "./screens/calendar/CalendarScreen";
import UserScreen from "./screens/user/UserScreen";
import { BottomTabOptions } from "./components/BottomTabOptions";
import { AchievementsScreen } from "./screens/achievements/AchievementsScreen";
import AddScreen from "./screens/add/AddScreen";
import Constants from "./common/utils/constants";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={Constants.Screens.Calendar}
          screenOptions={BottomTabOptions}
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
