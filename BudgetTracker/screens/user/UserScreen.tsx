import { View } from "react-native";
import { Text, Icon, Button } from "react-native-paper";
import { UserScreenStyle } from "./UserScreen.style";

const UserScreen = () => {
  return (
    <View style={UserScreenStyle.container}>
      <View style={UserScreenStyle.section}>
        <Text variant="headlineSmall" style={UserScreenStyle.headlineText}>
          Account
        </Text>
        <View style={UserScreenStyle.account}>
          <Icon source="account-circle" size={80} />
          <View>
            <Text variant="titleLarge">John Doe</Text>
            <Text variant="titleMedium">test@test.com</Text>
          </View>
        </View>
      </View>
      <View style={UserScreenStyle.section}>
        <Button mode="contained">Logout</Button>
      </View>
    </View>
  );
};

export default UserScreen;
