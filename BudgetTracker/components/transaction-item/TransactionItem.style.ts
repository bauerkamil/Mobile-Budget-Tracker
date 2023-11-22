import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper";

export const TransactionItemStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: MD3Colors.neutralVariant99,
    width: "100%",
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  titleContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
  },

  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: MD3Colors.tertiary90,
    borderRadius: 15,
  },

  iconWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textColor: {
    color: "black",
  },

  textBold: {
    fontWeight: "bold",
  },
});
