import { View, Text, ScrollView, StyleSheet, Button, } from 'react-native'
import React from 'react'
// views
import TopNavBar from '../views/topNavBar';
import LeaderBoardView from '../views/leaderBoardView';
import TotalScoreTile from '../views/totalScoreTile';
import AboutUsView from '../views/aboutUsView';
// the tab navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function HomeScreen({ navigation }) {
    // could use abouve method (jumping to tabs) to creat our own custom navbar without the top bar

    return (
        <ScrollView >
            <View style={styles.container}>
                <TopNavBar></TopNavBar>
                <LeaderBoardView></LeaderBoardView>
                <TotalScoreTile></TotalScoreTile>
                <AboutUsView></AboutUsView>
                <Button title="Go to Game" onPress={() => navigation.navigate('Game')} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight:900,
        //   marginTop:60,
        gap: 20,
    },
});