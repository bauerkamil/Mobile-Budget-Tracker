import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home/HomeScreen";
import CalendarScreen from "./screens/calendar/CalendarScreen";
import * as React from "react";
import { PaperProvider } from "react-native-paper";
import Constants from "./common/utils/constants";
import UserScreen from "./screens/user/UserScreen";
import { SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Constants.Screens.User}>
          <Stack.Screen name={Constants.Screens.Home} component={HomeScreen} />
          <Stack.Screen
            name={Constants.Screens.Calender}
            component={CalendarScreen}
          />
          <Stack.Screen name={Constants.Screens.User} component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
