import { Constants } from "../../common/utils/constants";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Current from "./components/current/Current";
import Recurring from "./components/recurring/Recurring";
import { MD3Colors } from "react-native-paper";
import { IScreenProps } from "../../common/interfaces";

const Tab = createMaterialTopTabNavigator();

const AddScreen = ({ navigation }: IScreenProps) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: MD3Colors.primary60 },
      }}
    >
      <Tab.Screen name={Constants.Expenses.Current} component={Current} />
      <Tab.Screen name={Constants.Expenses.Recurring} component={Recurring} />
    </Tab.Navigator>
  );
};

export default AddScreen;
