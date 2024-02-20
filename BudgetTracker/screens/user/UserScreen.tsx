import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { Button, Icon, Text } from "react-native-paper";
import { signOut } from "../../services/AuthService";
import { UserScreenStyle } from "./UserScreen.style";

const UserScreen = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setDisplayName(user.displayName || "");
      setEmail(user.email || "");
    } else {
      setDisplayName("");
      setEmail("");
    }
  });

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
              {displayName}
            </Text>
            <Text variant="titleMedium" style={UserScreenStyle.textColor}>
              {email}
            </Text>
          </View>
        </View>
      </View>
      <View style={UserScreenStyle.section}>
        <Button mode="contained" onPress={signOut}>
          Log out
        </Button>
      </View>
    </View>
  );
};

export default UserScreen;
