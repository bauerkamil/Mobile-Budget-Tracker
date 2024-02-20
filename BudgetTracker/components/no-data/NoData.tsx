import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { NoDataStyles } from "./NoData.style";

export const NoData = () => {
  return (
    <View style={NoDataStyles.container}>
      <Image
        style={NoDataStyles.image}
        source={require("../../assets/search.svg")}
      />
      <Text style={NoDataStyles.header}>No data to display</Text>
    </View>
  );
};
