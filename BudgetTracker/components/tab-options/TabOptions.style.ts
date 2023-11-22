import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper";

export const TabOptionsStyle = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderBottomColor: MD3Colors.primary60, 
    borderBottomWidth: 1,
  },
  homeScreenHeader: {
    width: "100%", 
    height: "100%", 
    justifyContent: "center", 
    alignItems: "center", 
    borderBottomColor: MD3Colors.neutralVariant99, 
    borderBottomWidth: 1,
  },
  calendarScreenHeader: {
    backgroundColor: MD3Colors.primary40,
    borderBottomColor: MD3Colors.neutralVariant99, 
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: MD3Colors.primary60,
  },
  whiteHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});