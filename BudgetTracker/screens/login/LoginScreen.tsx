import { useState } from "react";
import { LoginScreenStyles } from "./LoginScreen.style";
import { View, Image } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { signInWithEmail } from "../../services/AuthService";
import Constants from "../../common/utils/constants";
import { ILoginScreenProps } from "./ILoginScreenProps";

export default function LoginScreen(props: ILoginScreenProps) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPwdHidden, setIsPwdHidden] = useState(true);

  const registerRedirect = () => {
    navigation.navigate(Constants.Screens.Register);
  }

  const login = () => {
    signInWithEmail(email, password);
  }

  const handleEmailChange = (email: string) => {
    setEmail(email);
  }

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  }

  const togglePwdVisibility = () => {
    setIsPwdHidden(!isPwdHidden);
  }

  return (
    <View style={LoginScreenStyles.container}>
      <Text style={LoginScreenStyles.header}>
        Login
      </Text>
      <Image
        style={LoginScreenStyles.image}
        source={require('../../assets/budget.svg')}
      />

      <View style={LoginScreenStyles.inputView}>
        <TextInput
          style={LoginScreenStyles.input}    
          mode="outlined"
          label={"Email:"}
          placeholder="Email"
          onChangeText={handleEmailChange}
        />
      </View>

      <View style={LoginScreenStyles.inputView}>
        <TextInput
          style={LoginScreenStyles.input}  
          mode="outlined"
          label={"Password:"}
          placeholder="Password"
          onChangeText={handlePasswordChange}          
          secureTextEntry={isPwdHidden}
          right={<TextInput.Icon icon="eye" onPress={togglePwdVisibility} />}
        />
      </View>
      
      <Button mode="text"  onPress={registerRedirect}>
        No account? Register
      </Button>
      <Button mode="contained"  onPress={login}>
        Login
      </Button>

    </View>
  );
}