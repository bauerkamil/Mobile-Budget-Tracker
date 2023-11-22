import { StyleSheet } from "react-native";

export const ProgressCardStyle = StyleSheet.create({
  card: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#E7EFFA",
  },

  titleContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },

  titleFont: {
    fontWeight: "500",
  },

  iconContainer: {
    height: "100%",
    width: 50,
    borderRadius: 15,
  },

  iconWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    gap: 10,
  },

  progressBarWrapper: {
    flexGrow: 1,
  },

  progressBar: {
    height: 10,
    borderRadius: 10,
  },

  progressBarText: {
    flexGrow: 1,
  },

  statusContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    marginTop: 22,
    marginLeft: 5,
  },

  textColor: {
    color: "black",
  },
});
