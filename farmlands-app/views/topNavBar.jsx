import { View, Text, Image, StyleSheet, Button, } from 'react-native'
import React from 'react'

// * Icons
import { Feather } from '@expo/vector-icons';
// import { Home05Icon } from '@hugeicons/react-native-pro';
// import Homeicon05 from '../assets/';
// * the tab navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function TopNavBar({ navigation }) {
    return (
        <View style={styles.container}>
            {/* <View>
                <Button title="Go to Home" onPress={() => navigation.navigate('Game')} />
                <Feather name="home" size={32} color="black" />
            </View> */}
            <Feather name="home" size={32} color="black" />
            <Feather name="menu" size={32} color="black" />
            {/* <Button title="Go to Game" onPress={() => navigation.navigate('Game')} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        // height:50,
        padding: 20,
        backgroundColor: '#fff',
        // backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
});