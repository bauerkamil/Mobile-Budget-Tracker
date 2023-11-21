import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper";

export const UserScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MD3Colors.neutralVariant99,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  section: {
    width: "100%",
    padding: 10,
  },
  account: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    columnGap: 3,
  },
  settings: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    columnGap: 10,
  },
  headlineText: {
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 10,
  },
  textColor: {
    color: "black",
  },
});
