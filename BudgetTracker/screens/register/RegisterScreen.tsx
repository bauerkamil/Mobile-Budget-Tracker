import { useState } from "react";
import { TextInput, Text, Button } from "react-native-paper";
import { registerWithEmail } from "../../services/AuthService";
import { RegisterScreenStyles } from "./RegisterScreen.style";
import { View, Image } from "react-native";
import { IRegisterScreenProps } from "./IRegisterScreenProps";
import { Constants } from "../../common/utils/constants";

export default function RegisterScreen(props: IRegisterScreenProps) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [isPwdHidden, setIsPwdHidden] = useState(true);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isRepeatPwdHidden, setIsRepeatPwdHidden] = useState(true);
  const [alert, setAlert] = useState("");

  const loginRedirect = () => {
    navigation.navigate(Constants.Screens.Login);
  };

  const register = () => {
    if (!areCredentialsValid()) return;
    registerWithEmail(email, displayName, password);
  };

  const areCredentialsValid = () => {
    if (email === "") {
      setAlert("Email is required");
      return false;
    }

    if (password === "") {
      setAlert("Password is required");
      return false;
    }

    if (
      !password.match(/[A-Z]+/) ||
      !password.match(/[a-z]+/) ||
      !password.match(/[0-9]+/) ||
      password.length < 6
    ) {
      setAlert(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter and one number",
      );
      return false;
    }

    if (password !== repeatPassword) {
      setAlert("Passwords must match");
      return false;
    }

    return true;
  };

  const handleDisplayNameChange = (displayName: string) => {
    setDisplayName(displayName);
  };
  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  const togglePwdVisibility = () => {
    setIsPwdHidden(!isPwdHidden);
  };

  const handleRepeatPasswordChange = (repeatPassword: string) => {
    setRepeatPassword(repeatPassword);
  };

  const toggleRepeatPwdVisibility = () => {
    setIsRepeatPwdHidden(!isRepeatPwdHidden);
  };

  return (
    <View style={RegisterScreenStyles.container}>
      <Text style={RegisterScreenStyles.header}>Register</Text>

      <Image
        style={RegisterScreenStyles.image}
        source={require("../../assets/budget.svg")}
      />

      <View style={RegisterScreenStyles.inputView}>
        <TextInput
          style={RegisterScreenStyles.input}
          mode="outlined"
          label={"Display name:"}
          placeholder="Your name"
          onChangeText={handleDisplayNameChange}
        />
      </View>
      <View style={RegisterScreenStyles.inputView}>
        <TextInput
          style={RegisterScreenStyles.input}
          mode="outlined"
          label={"Email:"}
          placeholder="Email"
          onChangeText={handleEmailChange}
        />
      </View>

      <View style={RegisterScreenStyles.inputView}>
        <TextInput
          style={RegisterScreenStyles.input}
          mode="outlined"
          label={"Password:"}
          placeholder="Password"
          onChangeText={handlePasswordChange}
          secureTextEntry={isPwdHidden}
          right={<TextInput.Icon icon="eye" onPress={togglePwdVisibility} />}
        />
      </View>

      <View style={RegisterScreenStyles.inputView}>
        <TextInput
          style={RegisterScreenStyles.input}
          mode="outlined"
          label={"Repeat password:"}
          placeholder="Repeat Password"
          onChangeText={handleRepeatPasswordChange}
          onSubmitEditing={register}
          secureTextEntry={isRepeatPwdHidden}
          right={
            <TextInput.Icon icon="eye" onPress={toggleRepeatPwdVisibility} />
          }
        />
      </View>
      <Text style={RegisterScreenStyles.alert}>{alert}</Text>
      <Button mode="text" onPress={loginRedirect}>
        Already have an account? Log in
      </Button>
      <Button mode="contained" onPress={register}>
        Register
      </Button>
    </View>
  );
}
