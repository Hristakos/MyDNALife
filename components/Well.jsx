import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import constants from '../common/constants'
/*
This component represents a well and takes in status true indicates empty and given empty color (white)
false indicated full and is give full color (dodger blue)
*/

const { WELL_HEIGHT, WELL_WIDTH, EMPTY_COLOR, FULL_COLOR } = constants;

export default function Well({ status }) {


    return (
        <View
            style={[styles.container,
            { backgroundColor: status ? EMPTY_COLOR : FULL_COLOR }]}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        borderWidth: 1,
        width: WELL_HEIGHT,
        height: WELL_WIDTH,
        alignItems: "center",
        justifyContent: "center"
    },
});

