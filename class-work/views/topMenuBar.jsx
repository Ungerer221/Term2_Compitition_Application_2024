import { View, Text, Image, StyleSheet, } from 'react-native'
import React from 'react'

// Icons
import { Home05Icon } from '@hugeicons/react-native-pro';


// exported to : Home screen

export default function TopMenuBar() {
    return (
        <View>
            <View>
                {/* <Image
                    style={styles.homeIcon}
                    source={require('../assets/')}
                /> */}
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