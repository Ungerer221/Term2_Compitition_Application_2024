import { View, Text, StyleSheet, } from 'react-native'
// import React from 'react'
import React, { useState } from 'react';
// views
import TotalScoreTile from './totalScoreTile';
// icons
import { AntDesign } from '@expo/vector-icons';

export default function LeaderBoardView() {

    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
    const [shadowRadius, setShadowRadius] = useState(0);
    const [shadowOpacity, setShadowOpacity] = useState(0.1);

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.purpConMain}>
                    <View style={styles.purpCon}>
                        <TotalScoreTile></TotalScoreTile>
                        <View style={styles.divederSec}>
                            {/* Circle */}
                            <View style={styles.cirle}></View>
                            {/* line */}
                            <View style={styles.line}></View>
                            {/* circle */}
                            <View style={styles.cirle}></View>
                        </View>
                        <View style={styles.leaderBoardTab}>
                            <Text style={styles.leaderBoardTabText}>LeaderBoard</Text>
                            <AntDesign name="dashboard" size={24} color="white" />
                        </View>
                    </View>
                    <View style={styles.leaderBoardUserView}>

                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        // height: 370,
        backgroundColor: 'red',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    purpConMain: {
        width:'100%',
        backgroundColor: '#A08BF6',
        paddingBottom:20,
    },
    purpCon: {
        flex: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        // height:288,
        backgroundColor: '#A08BF6',
        // padding: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 22,
        gap: 10,
        // paddingBottom:20,
    },
    divederSec: {
        flex: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: 350,
        position: 'relative',
        right: 18,
    },
    cirle: {
        backgroundColor: "#fff",
        width: 38,
        height: 38,
        borderRadius: 50,
    },
    line: {
        borderWidth: 1,
        borderStyle: 'dashed',
        width: 310,
        borderColor: "#fff",
    },
    leaderBoardTab: {
        width: '100%',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 6,
        paddingLeft: 20,
    },
    leaderBoardTabText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    },
    leaderBoardUserView: {
        backgroundColor: '#fff',
        width: 320,
        height: 140,
        borderTopRightRadius: 22,
        borderBottomRightRadius: 22,
    }
});