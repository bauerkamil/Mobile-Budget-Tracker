import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MD3Colors, PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/home/HomeScreen";
import CalendarScreen from "./screens/calendar/CalendarScreen";
import UserScreen from "./screens/user/UserScreen";
import { BottomTabOptions } from "./components/tab-options/BottomTabOptions";
import { AchievementsScreen } from "./screens/achievements/AchievementsScreen";
import AddScreen from "./screens/add/AddScreen";
import { Constants } from "./common/utils/constants";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import Toast from "react-native-toast-message";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  const ProtectedTabs = () => {
    return (
      <Tab.Navigator
          screenOptions={BottomTabOptions}
        >
          <Tab.Screen
            name={Constants.Screens.Home}
            component={HomeScreen}
          />
          <Tab.Screen
            name={Constants.Screens.Calendar}
            component={CalendarScreen}
          />
          <Tab.Screen
            name={Constants.Screens.Add}
            component={AddScreen}
          />
          <Tab.Screen
            name={Constants.Screens.Achievements}
            component={AchievementsScreen}
          />
          <Tab.Screen
            name={Constants.Screens.User}
            component={UserScreen}
          />
      </Tab.Navigator>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!isAuthenticated ? (
            <>
            <Stack.Screen
              name={Constants.Screens.Login}
              component={LoginScreen}
            />
            <Stack.Screen
              name={Constants.Screens.Register}
              component={RegisterScreen}
            />
            </>
          ) : (
            <Stack.Screen name={Constants.Screens.Home} component={ProtectedTabs} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </PaperProvider>
  );
}
