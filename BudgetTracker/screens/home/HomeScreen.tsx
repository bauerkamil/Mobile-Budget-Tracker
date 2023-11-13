import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { IHomeScreenProps } from './IHomeScreenProps';
import { HomeScreenStyle } from './HomeScreen.style';

export default function HomeScreen(props: IHomeScreenProps) {
  const {navigation} = props;
  return (
      <View style={HomeScreenStyle.container}>
        <Text>Open up App.tsx to start working on your app! this is home screen</Text>
        <Button
          title="Go to Calendar"
          onPress={() => navigation.navigate('Calendar')}
        />
        <StatusBar style="auto" />
      </View>
  );
}