import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AddCircleIcon } from '@hugeicons/react-native-pro';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <br></br> */}
      <Text>Hello World !</Text>
      <Button
        onPress={() => {
          console.log('You tapped the button!');
        }}
        title="Press Me"
        style={{
          width: 50,
          backgroundColor: 'black',
        }}
      />
      <Text>Made By Ungerer Hattingh</Text>
      <AddCircleIcon
        size={24}
        color={"#000000"}
        variant={"stroke"}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});