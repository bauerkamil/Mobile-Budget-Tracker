import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { IHomeScreenProps } from "./IHomeScreenProps";
import { HomeScreenStyle } from "./HomeScreen.style";
import { ActivityIndicator, MD2Colors, Button } from "react-native-paper";

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
    </View>
  );
}
