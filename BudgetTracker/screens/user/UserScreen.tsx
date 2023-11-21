import { View } from "react-native";
import { Text, Icon, Switch, Button } from "react-native-paper";
import { UserScreenStyle } from "./UserScreen.style";
import { useState } from "react";
import { signOut } from "../../services/AuthService";

const UserScreen = () => {
  const [value, setValue] = useState(false);

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

        <Button mode="contained" onPress={signOut}>Log out</Button>

      </View>
    </View>
  );
};

export default UserScreen;
