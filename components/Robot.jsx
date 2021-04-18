import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import constants from '../common/constants'
/*
    This component represents the robot arms.
    x, y passed in to perform calculation to move the arm over the correct well of the plate.
*/

const { WELL_HEIGHT, WELL_WIDTH } = constants;
export default function Robot({ x, y }) {

    return (
        <>
            <View style={[styles.robot, { left: (x * WELL_WIDTH) - 275, top: (y * -WELL_HEIGHT) + 217.5 }]}>

            </View>
            <View style={[styles.head, { left: (x * WELL_WIDTH) + 12.5, top: (y * -WELL_HEIGHT) + 212.5 }]}>

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
