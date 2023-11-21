import { View } from "react-native";
import { Text, Icon, Button } from "react-native-paper";
import { UserScreenStyle } from "./UserScreen.style";

const UserScreen = () => {
  return (
    <View style={UserScreenStyle.container}>
      <View style={UserScreenStyle.section}>
        <Text
          variant="headlineSmall"
          style={{
            ...UserScreenStyle.headlineText,
            ...UserScreenStyle.textColor,
          }}
        >
          Account
        </Text>
        <View style={UserScreenStyle.account}>
          <Icon source="account-circle" size={80} />
          <View>
            <Text variant="titleLarge" style={UserScreenStyle.textColor}>
              John Doe
            </Text>
            <Text variant="titleMedium" style={UserScreenStyle.textColor}>
              test@test.com
            </Text>
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
