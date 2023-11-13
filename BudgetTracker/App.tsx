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
        <Tab.Navigator
          initialRouteName={Constants.Screens.User}
          screenOptions={({ route }) => ({
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ size }) => {
              let iconName;

              switch (route.name) {
                case Constants.Screens.Home:
                  iconName = "home";
                  break;
                case Constants.Screens.Calender:
                  iconName = "calendar-account";
                  break;
                case Constants.Screens.Add:
                  iconName = "plus";
                  break;
                case Constants.Screens.Achievements:
                  iconName = "chart-bar";
                  break;
                case Constants.Screens.User:
                  iconName = "account";
                  break;
              }

              return <Icon source={iconName} size={size} />;
            },
            tabBarActiveBackgroundColor: "gray",
            tabBarInactiveBackgroundColor: "darkgray",
          })}
        >
          <Tab.Screen name={Constants.Screens.Home} component={HomeScreen} />
          <Tab.Screen
            name={Constants.Screens.Calender}
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
