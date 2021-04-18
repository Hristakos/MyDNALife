import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Detect({ placed, onPress, status = "" }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.detect, { opacity: placed ? 1 : 0.5 }]}
                disabled={!placed}
                onPress={onPress}>

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
