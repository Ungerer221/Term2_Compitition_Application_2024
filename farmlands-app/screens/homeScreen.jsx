import { View, Text, ScrollView, StyleSheet, Button, } from 'react-native'
import React from 'react'
// views
import TopNavBar from '../views/topNavBar';
import LeaderBoardView from '../views/leaderBoardView';
import TotalScoreTile from '../views/totalScoreTile';
import AboutUsView from '../views/aboutUsView';
import GameTab from '../views/gameTab';
import BadgesTab from '../views/badgesTab';
import SeasonsEndTab from '../views/seasonsEndTab';
import NewsTab from '../views/newsTab';
// the tab navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// icons
// import { Home01Icon } from '@hugeicons/react-native-pro';

export default function HomeScreen({ navigation }) {
    // could use abouve method (jumping to tabs) to creat our own custom navbar without the top bar

    return (
        <ScrollView >
            <View style={styles.container}>
                {/* <View style={styles.colorBlock02}></View> */}
                <View style={styles.backgroundColorBlock02}></View>
                <TopNavBar></TopNavBar>
                {/* // todo : redesign Leader BOard and front panel for home screen */}
                <LeaderBoardView></LeaderBoardView>
                {/* <Text style={styles.heading01}>your total score</Text> */}
                <View style={styles.home02Con}>
                    {/* <TotalScoreTile></TotalScoreTile> */}
                    <Text style={styles.heading01}>Badges Earned</Text>
                    <BadgesTab></BadgesTab>
                    <GameTab></GameTab>
                    <SeasonsEndTab></SeasonsEndTab>
                    <NewsTab></NewsTab>
                    <AboutUsView></AboutUsView>
                    <Button title="Go to Game" onPress={() => navigation.navigate('Game')} />
                    {/* <Home01Icon /> */}
                </View>
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
        minHeight: 900,
        //   marginTop:60,
        paddingTop: 40,
        gap: 20,
    },
    home02Con:{
        flex:0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
        width:'100%',
        paddingTop: 20,
        // backgroundColor:'#A08BF6',
        backgroundColor:'white',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
    },
    colorBlock02: {
        position: 'absolute',
        top: -90,
        width: '100%',
        height: 420,
        borderRadius: 200,
        backgroundColor: '#F65774'
    },
    heading01: {
        fontSize: 24,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
    backgroundColorBlock02: {
        width: '100%',
        // height: '26.5%',
        height: '36.5%',
        backgroundColor: '#FFD166',
        position: 'absolute',
        top: 0,
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
    }
});