import { View, Text, Image, StyleSheet, } from 'react-native'
import React from 'react'

// * Icons
import { Feather } from '@expo/vector-icons';
// import { Home05Icon } from '@hugeicons/react-native-pro';
// import Homeicon05 from '../assets/';

export default function TopNavBar() {
    return (
        <View style={styles.container}>
            <Feather name="home" size={32} color="black" />
            <Feather name="menu" size={32} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
});