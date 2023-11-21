import { StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper';

export const CalendarScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MD3Colors.neutralVariant99,
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
  },
});
