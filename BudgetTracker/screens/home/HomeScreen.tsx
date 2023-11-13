import { View } from "react-native";
import { IHomeScreenProps } from "./IHomeScreenProps";
import { HomeScreenStyle } from "./HomeScreen.style";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export default function HomeScreen(props: IHomeScreenProps) {
  return (
    <View style={HomeScreenStyle.container}>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </View>
  );
}
