import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TotalScoreTile() {
    return (
        <View style={styles.container}>
            <Text>totalScoreTile</Text>
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
        justifyContent:'center',
        flexDirection: 'row',
        borderWidth:1,
        borderStyle:'dashed',
        borderColor:'black',
        borderRadius:12,
    },
});