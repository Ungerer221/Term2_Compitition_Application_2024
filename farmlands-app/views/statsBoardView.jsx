import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
// icns
import { AntDesign } from '@expo/vector-icons';
// components
import HoursPlayedTab from '../components/hoursPlayedTab';
import DividerBar from '../components/dividerBar';

export default function StatsBoardView() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.topRowText}>your stats</Text>
        <AntDesign name="dashboard" size={24} color="black" />
      </View>
      {/* hours played */}
      <HoursPlayedTab />
      <DividerBar />
      {/* Plants planted  */}
      <View>
        <Text></Text>
        <View>
          <Text></Text>

        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: '#fff',
    // backgroundColor:'#F1B46B',
    width: '100%',
    padding: 20,
    borderRadius: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },
  topRowText: {
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'capitalize',
  }
})