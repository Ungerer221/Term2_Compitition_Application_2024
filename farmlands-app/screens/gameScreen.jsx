import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
// views
import TopNavBar from '../views/topNavBar';
import TotalScoreBar from '../views/totalScoreBar';
import FarmPlantingSpaceView from '../views/farmPlantingSpaceView';
import FarmPlantSelectBar from '../views/farmPlantSelectBar';

export default function GameScreen() {
    return (
        <View style={styles.container}>
            <TopNavBar></TopNavBar>
            <View style={styles.gameTopTextContainer}>
                <Text style={styles.gameParagraph}>Your Farm</Text>
                <Text style={styles.gameTitleText}>Farm Name</Text>
            </View>
            <TotalScoreBar />
            <FarmPlantingSpaceView />
            <FarmPlantSelectBar />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // backgroundColor: '#fff',
        backgroundColor: '#90F6DE',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
        paddingTop: 40,
    },
    gameTopTextContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    gameParagraph:{
        fontSize:16,
    },
    gameTitleText:{
        fontSize:32,
        fontWeight:'bold',
    }
});