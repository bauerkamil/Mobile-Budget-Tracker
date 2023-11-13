import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper";

export const AddScreenStyle = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: MD3Colors.neutralVariant99,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
