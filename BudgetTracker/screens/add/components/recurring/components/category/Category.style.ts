import { StyleSheet } from "react-native";

export const CategoryStyle = StyleSheet.create({
  container: {
    backgroundColor: "#E7EFFA",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    padding: 8,
    borderRadius: 12,
    margin: 10,
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 3px",
  },
  icon: {
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "black",
  },
});
