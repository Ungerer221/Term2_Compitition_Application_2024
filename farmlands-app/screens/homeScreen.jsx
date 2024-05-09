import { View, Text, ScrollView, StyleSheet,} from 'react-native'
import React from 'react'

// views
import TopNavBar from '../views/topNavBar';
import LeaderBoardView from '../views/leaderBoardView';
import TotalScoreTile from '../views/totalScoreTile';
import AboutUsView from '../views/aboutUsView';

export default function HomeScreen() {
    return (
        <ScrollView >
            <View style={styles.container}>
                <TopNavBar></TopNavBar>
                <LeaderBoardView></LeaderBoardView>
                <TotalScoreTile></TotalScoreTile>
                <AboutUsView></AboutUsView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:60,
      gap:20,
    },
  });