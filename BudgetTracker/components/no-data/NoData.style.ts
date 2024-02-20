import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper";

export const NoDataStyles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
  },
  image: {
    width: 100,
    height: 200,
    alignSelf: "center",
  },
  header: {
    color: MD3Colors.primary40,
    fontWeight: "bold",
    textAlign: "center",
  },
});
