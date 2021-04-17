import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Move({ placed, x, y, north, east, south, west }) {
    console.log("placed = " + placed + "y = " + y)
    return (
        <View style={styles.container}>
            <View style={styles.rowTopBottom}>

                <TouchableOpacity
                    style={[styles.button, { opacity: placed && y < 4 ? 1 : 0.5 }]}
                    disabled={placed && y < 4 ? false : true}
                    onPress={north}>
                    <Text style={styles.northText}>North</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.rowMiddle}>

                <TouchableOpacity
                    style={[styles.button, { opacity: placed && x > 0 ? 1 : 0.5 }]}
                    disabled={placed && x > 0 ? false : true}
                    onPress={west}
                >
                    <Text style={styles.northText}>West</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { opacity: placed && x < 4 ? 1 : 0.5 }]}
                    disabled={placed && x < 4 ? false : true}
                    onPress={east}
                >
                    <Text style={styles.eastText}>East</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.rowTopBottom}>
                <TouchableOpacity
                    style={[styles.button, { opacity: placed && y > 0 ? 1 : 0.5 }]}
                    disabled={placed && y > 0 ? false : true}
                    onPress={south}
                >
                    <Text style={styles.northText}>South</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: 250,
        height: 150,
        alignItems: "center",

    },
    rowTopBottom: {
        borderWidth: 1,
        width: 250 / 3,
        height: 50,
    },
    rowMiddle: {
        flexDirection: "row",
        borderWidth: 1,
        width: 250,
        height: 50,
        justifyContent: "space-between"
    },
    button: {
        height: "100%",
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        width: 250 / 3
    },

});
