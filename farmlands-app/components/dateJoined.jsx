import { View, Text,StyleSheet, } from 'react-native'
import React from 'react'
// icons
import { Ionicons } from '@expo/vector-icons';

export default function DateJoined() {
    return (
        <View style={styles.container}>
            <View>
                <Ionicons name="calendar-outline" size={24} color="black" />
            </View>
            <Text>Joined</Text>
            <Text>Date</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      gap:4,
    },
  });