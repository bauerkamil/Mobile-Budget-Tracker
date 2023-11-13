import React from "react";

import { StyleSheet, View } from "react-native";
import { ActivityIndicator, MD2Colors, MD3Colors } from "react-native-paper";

import { ICalendarScreenProps } from "./ICalendarScreenProps";

export default function CalendarScreen(props: ICalendarScreenProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MD3Colors.neutralVariant99,
    alignItems: "center",
    justifyContent: "center",
  },
});
