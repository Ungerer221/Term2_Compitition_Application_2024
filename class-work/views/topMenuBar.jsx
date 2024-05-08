import { View, Text, Image, StyleSheet, } from 'react-native'
import React from 'react'

// Icons
import { Home05Icon } from '@hugeicons/react-native-pro';
import { Feather } from '@expo/vector-icons';


// exported to : Home screen

export default function TopMenuBar() {
    return (
        <View style={styles.container}>
            <Home05Icon
                    size={32}
                    color={"#000000"}
                    variant={"stroke"}
                />
                <Feather name="home" size={24} color="black" />
            <View>
                <Image
                    style={styles.homeIcon}
                    source={require('../assets/homeIcon.svg')}
                />
                <Home05Icon
                    size={32}
                    color={"#000000"}
                    variant={"stroke"}
                />
            </View>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    homeIcon: {
        width: 10,
    }
});