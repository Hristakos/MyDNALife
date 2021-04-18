import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Robot({ x, y }) {

    return (
        <>
            <View style={[styles.robot, { left: (x * 50) - 275, top: (y * -50) + 217.5 }]}>

            </View>
            <View style={[styles.head, { left: (x * 50) + 12.5, top: (y * -50) + 212.5 }]}>

            </View>
        </>

    )
}

const styles = StyleSheet.create({
    robot: {
        height: 12.5,
        width: 300,
        position: "absolute",
        backgroundColor: "silver"

    },
    head: {
        position: "absolute",
        borderRadius: 12.5,
        width: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "silver"
    },
})
