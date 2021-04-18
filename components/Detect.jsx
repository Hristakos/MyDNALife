import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
/*
    This components takes in placed true/false, onPress function passed in to perform 
    the detect functionality and status to display EMPTY, FULL or "".
    if placed is false meaning there hasn't been a place command the button is diabled
    and the opacity is reduced to indicate it has been diabled. If a place command had been
    executed the button will be enabled and visible and when pressed will perform function passed
    in.
*/
export default function Detect({ placed, onPress, status = "" }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.detect, { opacity: placed ? 1 : 0.5 }]}
                disabled={!placed}
                onPress={onPress}
            >
                <Text>Detect</Text>
            </TouchableOpacity>

            <View style={styles.status}>
                <Text>{status}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: "row",
        width: 250,
        height: 30,

    },
    detect: {
        backgroundColor: "red",
        width: "50%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",

    },
    status: {
        width: "50%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",

    }
})
