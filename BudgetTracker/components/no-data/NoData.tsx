
import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { NoDataStyles } from "./NoData.style";

export const NoData = () => {
  return (
    <View>
      <Text style={NoDataStyles.header}>
        No data to display
      </Text>
      <Image
        style={NoDataStyles.image}
        source={require('../../assets/friends.svg')}
      />
    </View>
  );
}