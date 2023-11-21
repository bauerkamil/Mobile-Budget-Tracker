import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper";

export const HomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MD3Colors.neutralVariant99,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    width: "100%",
    paddingTop: 25,
    padding: 15,
    paddingBottom: 0,
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
    paddingBottom: 10,
  },
  textColor: {
    color: "black",
  },
  lineChartStyle: {
    fontFamily: "Roboto",
  },
  budgetHeader: {
    width: "100%",
    paddingTop: 60,
    paddingBottom: 20,
    marginBottom: -1,
  },
  budgetText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
