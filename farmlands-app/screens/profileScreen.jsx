import { View, Text, StyleSheet, ScrollView, Image, } from 'react-native'
import React from 'react'
// views
import TopNavBar from '../views/topNavBar';
// componenets
import ProfilePicMain from '../components/profilePicMain';
import DateJoined from '../components/dateJoined';
import DividerBar from '../components/dividerBar';
// views
import TotalScoreBar from '../views/totalScoreBar';
import LeaderBoardView from '../views/leaderBoardView';
import StatsBoardView from '../views/statsBoardView';

export default function ProfileScreen() {
  return (
    // could try a view behind the scroll view to add background elements that arent affected by scroll
    <ScrollView >
      <View style={styles.container}>
        <TopNavBar />
        {/* top section con */}
        <View style={styles.profileTopSec}>
          <ProfilePicMain></ProfilePicMain>

          <View style={styles.userDataCon}>
            <Text style={styles.userDataTitle}>the Users Name</Text>
            <Text style={styles.userDataBio}>Person bio</Text>
            <DateJoined></DateJoined>
          </View>
          {/* the backgroundimages */}
          <View style={styles.backgroundImageRow}>
            <Image
              style={styles.backGroundImagePlant}
              source={require('../assets/CactusVasenoLight.png')}
            />
            <Image
              style={styles.backGroundImagePlant}
              source={require('../assets/plantVase.png')}
            />
          </View>
        </View>
        {/* top section con end */}
        {/* divider bar */}
        <DividerBar />
        {/* Dashboard */}
        <Text style={styles.dashboardTitle01}>Your Dashboard</Text>
        <Text>your score</Text>
        <TotalScoreBar />
        <Text>LeaderBoard</Text>
        <LeaderBoardView />
        <Text>Stats</Text>
        <StatsBoardView />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    // backgroundColor:'red',
  },
  profileTopSec: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    // backgroundColor: 'purple',
    width: 193,
  },
  userDataCon: {
    flex: 0,
    width: "100%",
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    // backgroundColor: 'red',
  },
  userDataTitle: {
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  userDataBio: {
    fontSize: 16,
    fontWeight: '400',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  backgroundImageRow: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '210%',
    position: 'absolute',
  },
  backGroundImagePlant: {
    height: 200,
    width: 100,
  },
  dashboardTitle01: {
    fontSize: 32,
    fontWeight: '700',
  }
});