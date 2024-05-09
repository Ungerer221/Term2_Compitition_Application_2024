import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AboutUsView() {
    return (
        <View style={styles.container}>
            <Text>aboutUsView</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: 350,
        height: 170,
        borderRadius: 22,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
});