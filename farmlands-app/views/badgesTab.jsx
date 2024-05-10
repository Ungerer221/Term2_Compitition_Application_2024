import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
// components
import Badge01 from '../components/badge01'

export default function BadgesTab() {
  return (
    <View style={styles.container}>
      <Badge01></Badge01>
      <Badge01></Badge01>
      <Badge01></Badge01>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    width:350,
  },
  container02: {
    backgroundColor: '#82BF00'
  }
});