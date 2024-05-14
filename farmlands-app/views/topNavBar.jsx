import { View, Text, Image, StyleSheet, Button, } from 'react-native'
import React from 'react'


//  Icons
import { Feather } from '@expo/vector-icons';
// import { Home05Icon } from '@hugeicons/react-native-pro';
// import Homeicon05 from '../assets/';
import MenuSquareIcon from '../icons/menuSquareIcon';
//  the tab navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useDrawerStatus } from '@react-navigation/drawer';

export default function TopNavBar({ navigation }) {
    return (
        <View style={styles.container}>
            {/* <View style={styles.homeIconBlock}>
                <Feather name="home" size={32} color="black" />
            </View> */}
            <View style={styles.homeIconBlock}>
                <Text style={styles.nameText}>FarmLands</Text>
            </View>
            <View style={styles.menuIconBlock}>
                <MenuSquareIcon
                />

            </View>
            {/* <Button title="Go to Game" onPress={() => navigation.navigate('Game')} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        // height:50,
        // padding: 20,
        // backgroundColor: '#fff',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    homeIconBlock: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#29C3CB',
        // padding: 10,
        paddingLeft: 20,
        borderBottomRightRadius: 12,
    },
    nameText: {
        fontSize: 32,
        fontWeight: '700',
    },
    menuIconBlock: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#29C3CB',
        padding: 10,
        borderBottomLeftRadius: 12,
    },
    icon32: {
        width: 32,
        height: 32,
    }
});