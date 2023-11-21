import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper";

export const CalendarScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MD3Colors.neutralVariant99,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  calendarBox: {
    width: "100%",
  },
  calendarText: {
    color: "#fff",
  },
  selectedDay: {
    backgroundColor: "#fff",
    opacity: 0.5,
  },
  selectedDayText: {
    color: "#000",
    opacity: 1,
  },
  spentText: {
    color: "black",
    fontWeight: "bold",
  },
  spentTextContainer: {
    padding: 20,
    width: "100%",
  },
  spentTextWrapper: {
    width: "100%",
    backgroundColor: "#E7EFFA",
    padding: 20,
  },
  spentTextTitle: {
    fontWeight: "bold",
  },
  spentTextAmount: {
    fontWeight: "bold",
    color: "#8144FB",
  },
  section: {
    width: "100%",
    padding: 20,
  },
  sectionText: {
    color: "black",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  pieChartStyle: {
    fontFamily: "Roboto",
  },
});
