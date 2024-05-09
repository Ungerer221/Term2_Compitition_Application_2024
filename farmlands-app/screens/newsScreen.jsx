import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <Text>newsScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      width:'100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 20,
      paddingTop:20,
  },
});