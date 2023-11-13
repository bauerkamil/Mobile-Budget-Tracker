import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import {
  ActivityIndicator,
  MD2Colors,
  MD3Colors,
  Button,
  Icon,
} from "react-native-paper";

import { IHomeScreenProps } from "./IHomeScreenProps";
import { HomeScreenStyle } from "./HomeScreen.style";
import React from "react";

export default function HomeScreen(props: IHomeScreenProps) {
  const { navigation } = props;

  return (
    <View style={HomeScreenStyle.container}>
      <Text>
        Open up App.tsx to start working on your app! this is home screen
      </Text>
      <StatusBar style="auto" />
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
      <Icon source="event" color={MD3Colors.error50} size={20} />
      <Button onPress={() => navigation.navigate("Achievements")}>
        Go to achievements
      </Button>
    </View>
  );
}
