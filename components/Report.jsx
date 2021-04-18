import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Report({ placed, onPress, report = "" }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.report, { opacity: placed ? 1 : 0.5 }]}
                disabled={!placed}
                onPress={onPress}>

                <Text>Report</Text>
            </TouchableOpacity>
            <View style={styles.status}>
                <Text>{report}</Text>
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
    report: {
        backgroundColor: "silver",
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

