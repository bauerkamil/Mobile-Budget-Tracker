import React from "react";

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { ICalendarScreenProps } from "./ICalendarScreenProps";

export default function CalendarScreen(props: ICalendarScreenProps) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text>this is calendar</Text>
      <Button
        title="Go to home screen"
        onPress={() => navigation.navigate("Home")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
