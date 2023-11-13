import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper";

export const HomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MD3Colors.neutralVariant99,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    width: "100%",
    padding: 20,
  },
  titleText: {
    fontWeight: "bold",
  },
  section: {
    width: "100%",
    padding: 20,
  },
  sectionText: {
    fontWeight: "bold",
    padding: 10,
  },
});
