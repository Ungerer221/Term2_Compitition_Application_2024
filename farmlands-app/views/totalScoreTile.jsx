import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
// icons
import { FontAwesome } from '@expo/vector-icons';

export default function TotalScoreTile() {
    return (
        <View style={styles.container}>
            <FontAwesome name="money" size={24} color="black" />
            <Text>totalScoreTile</Text>
            <FontAwesome name="money" size={24} color="black" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: 350,
        padding: 20,
        // backgroundColor:'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'black',
        borderRadius: 12,
        gap:10,
    },
});