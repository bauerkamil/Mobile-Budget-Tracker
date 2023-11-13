import { View } from "react-native";
import { Text } from "react-native-paper";
import { AddScreenStyle } from "./AddScreen.style";
import Constants from "../../common/utils/constants";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Current from "./components/current/Current";
import Recurring from "./components/recurring/Recurring";

const Tab = createMaterialTopTabNavigator();

const AddScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Constants.Expenses.Current} component={Current} />
      <Tab.Screen name={Constants.Expenses.Recurring} component={Recurring} />
    </Tab.Navigator>
  );
};

export default AddScreen;
