import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, Image, } from 'react-native';
import HomeScreen from './screens/homeScreen';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <Text>Hello World !</Text> */}
        {/* <Button
        onPress={() => {
          console.log('You tapped the button!');
        }}
        title="Press Me"
        style={{
          width: 50,
          backgroundColor: 'black',
        }}
      /> */}
        <HomeScreen></HomeScreen>
        <Text>Made By Ungerer Hattingh</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 40,
  },
});