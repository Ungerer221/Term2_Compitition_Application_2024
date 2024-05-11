import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
// views
import TopNavBar from '../views/topNavBar';
import TotalScoreTile from '../views/totalScoreTile';

export default function GameScreen() {
    return (
        <View style={styles.container}>
            <TopNavBar></TopNavBar>
            <View>
                <Text>Your Farm</Text>
                <Text>Farm Name</Text>
            </View>
            <TotalScoreTile />
            <Text>gameScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
        paddingTop: 40,
    },
});