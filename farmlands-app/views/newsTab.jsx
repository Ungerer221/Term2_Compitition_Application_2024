import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react'
// Icons
import { Ionicons } from '@expo/vector-icons';
// componenets
import MoreBtn02 from '../components/moreBtn02';
import MoreButton01 from '../components/moreButton01';

export default function NewsTab() {
  return (
    <View style={styles.container}>
      {/* inner container */}
      <View style={styles.container02}>
        {/* top row */}
        <View style={styles.topRow}>
          {/* title text */}
          <View style={styles.titleTextCon}>
            <Text style={styles.titleText}>News</Text>
            <Ionicons name="newspaper-outline" size={24} color="black" />
          </View>
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </View>
        {/* middel */}
        <View>
          <Text>
            Qorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </Text>
        </View>
        {/* bottom row */}
        <View style={styles.bottomRow}>
          {/* <MoreBtn02 /> */}
          <MoreButton01 />
        </View>
        {/* background */}
        <Image
          style={styles.backGroundImage}
          source={require('../assets/37.png')}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: 350,
    height: 284,
    borderRadius: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // overflow:'hidden',
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
  container02: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
    borderRadius: 22,
    padding: 20,
    width: 350,
    height: 284,
    overflow: 'hidden',
  },
  topRow: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  titleTextCon: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 6,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
  },
  backGroundImage: {
    width: '100%',
    height: 270,
    position: 'absolute',
    bottom: -28,
    zIndex: -5,
  }
});