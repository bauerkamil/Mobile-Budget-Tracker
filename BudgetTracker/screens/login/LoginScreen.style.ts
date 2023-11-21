
import { StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper';
export const LoginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  header: {
    color: MD3Colors.primary40,
    fontSize: 30,
    marginBottom: 20
  },

  inputView: {
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    width: "100%",
  },

  image: {
    width: 200,
    height: 200,
  }
});
