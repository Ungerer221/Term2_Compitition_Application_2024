import { View, Text, StyleSheet, } from 'react-native'
// import React from 'react'
import React, { useState } from 'react';

export default function LeaderBoardView() {

    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
    const [shadowRadius, setShadowRadius] = useState(0);
    const [shadowOpacity, setShadowOpacity] = useState(0.1);

    return (
        <View style={styles.container}>
            <Text>leaderBoardView</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 170,
        // backgroundColor:'purple',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22,
        backgroundColor:'white',
        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
});