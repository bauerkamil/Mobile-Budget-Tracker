import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home/HomeScreen";
import CalendarScreen from "./screens/calendar/CalendarScreen";
import * as React from "react";
import Constants from "./common/utils/constants";
import UserScreen from "./screens/user/UserScreen";
import { PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabOptions } from "./components/BottomTabOptions";

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
          <Tab.Screen name={Constants.Screens.Add} component={HomeScreen} />
          <Tab.Screen
            name={Constants.Screens.Achievements}
            component={HomeScreen}
          />
          <Tab.Screen name={Constants.Screens.User} component={UserScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
