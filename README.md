# Term2_Compitition_Application_2024
 This is the repo for our term 2 application term project. For this project we were tasked with creating a compitition application of any kind. 


# How to Install and Setup

> Note[warning]
> do this if you dont want the newest temeplete that uses typscript as defualt !Apparently!

other wize do normal istallation

```
npx create-expo-app app-name
```

1. 1st you after installing Node.js and Vs-code you want to set up you app - (in your vs terminal)

```
npx create-expo-app@latest --template blank@sdk-50
```

then change the app name or just press enter for "app-name"

2. 2nd Change your directory to current working folder

```
cd app-name
```

3. 3rd You want to update the Current SDK version of expo to the most recent one

```
npm install expo@latest
```

4. 4th To start your application 

```
npm start
```

this is used for the default install method

```
npx expo start
```

### Inserting SVGs into your app

https://dev.to/gautham495/how-to-use-svgs-in-react-native-37n9 

```
npm i react-native-svg
npm i react-native-svg-transformer
```
> to install these packages

https://docs.expo.dev/ui-programming/using-svgs/ 

```
    import Logo from './assets/logo.svg';

    <Logo width={120} height={40} />;
```



### To Update your React-Nativ 

```
    # {{VERSION}} and {{REACT_VERSION}} are the release versions showing in the diff
    npm install react-native@{{VERSION}}
    npm install react@{{REACT_VERSION}}
```

Otherwise Use these

For the status bar
```
    npm install expo-status-bar@~1.12.1
```

For React-Nativ
```
    npm install react-native@0.74.1
```

## Style Sheet

```
const styles = StyleSheet.create({
    container:{
        
    }
})
```

## Shadow Generator
this is a shadow generator for react native 
> goes into the stylesheet object

https://ethercreative.github.io/react-native-shadow-generator/ 

## ISetting Up Images

```
<Image
    style={styles.icon32}
    source={require('../icons/menuIcon02.png')}
/>
```
## Props dependency For inner shadow

https://www.npmjs.com/package/prop-types

```
npm install --save prop-types
```

## Inner shadow npm

https://www.npmjs.com/package/react-native-inset-shadow?activeTab=readme 

```
npm i react-native-inset-shadow
```

### Usage

```
import InsetShadow from 'react-native-inset-shadow'
import { Text, View } from 'react-native' 
 
const ViewWithInsetShadow = () => {
  return (
    <View style={{ height: 150 }}>
      <InsetShadow>
        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <Text>This view has an inset shadow!</Text>
        </View>
      </InsetShadow>
    </View>
  )
}
```