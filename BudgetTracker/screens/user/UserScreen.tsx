import { View } from "react-native";
import { Text, Icon, Switch } from "react-native-paper";
import { UserScreenStyle } from "./UserScreen.style";
import { useState } from "react";

const UserScreen = () => {
  const [value, setValue] = useState(false);
  return (
    <View style={UserScreenStyle.container}>
      <View style={UserScreenStyle.section}>
        <Text variant="headlineMedium">Account</Text>
        <View style={UserScreenStyle.account}>
          <Icon source="account-circle" size={80} />
          <View>
            <Text variant="titleLarge">John Doe</Text>
            <Text variant="titleMedium">test@test.com</Text>
          </View>
        </View>
      </View>
      <View style={UserScreenStyle.section}>
        <Text variant="headlineMedium">Settings</Text>
        <View style={UserScreenStyle.settings}>
          <Switch value={value} onValueChange={setValue} />
          <Text>Option 1</Text>
        </View>
        <View style={UserScreenStyle.settings}>
          <Switch value={value} onValueChange={setValue} />
          <Text>Option 1</Text>
        </View>
        <View style={UserScreenStyle.settings}>
          <Switch value={value} onValueChange={setValue} />
          <Text>Option 1</Text>
        </View>
      </View>
    </View>
  );
};

export default UserScreen;
