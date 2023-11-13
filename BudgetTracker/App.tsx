import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home/HomeScreen";
import CalendarScreen from "./screens/calendar/CalendarScreen";
import * as React from "react";
import Constants from "./common/utils/constants";
import UserScreen from "./screens/user/UserScreen";
import { SafeAreaView } from "react-native";
import { Icon, PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused, color, size }) => {
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
        })}>
          <Tab.Screen name={Constants.Screens.Home} component={HomeScreen} />
          <Tab.Screen name={Constants.Screens.Calender} component={CalendarScreen} />
          <Tab.Screen name={Constants.Screens.User} component={UserScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
