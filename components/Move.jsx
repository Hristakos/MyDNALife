import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import constants from '../common/constants.js'
/*
    This component takes in placed true/false, x,y positions indicating position of robot arm,
    north, east, sout,west functions to perform on press for corresponding buttons pressed.
    North button enabled if placed has been performed and y value is less than MAX_Y (4).
    East button enabled if placed has been executed and x value is less than MAX_X (4).
    South button enabled if placed has been executed and y value is greater than MIN_Y (0).
    West button is enabled if placed has been executed and x value greater than MIN_X (0).
*/

const { MIN_X, MAX_X, MIN_Y, MAX_Y } = constants;
export default function Move({ placed, x, y, north, east, south, west }) {

    return (
        <View style={styles.container}>
            <View style={styles.rowTopBottom}>

                <TouchableOpacity
                    style={[styles.button, { opacity: placed && y < MAX_Y ? 1 : 0.5 }]}
                    disabled={placed && y < MAX_Y ? false : true}
                    onPress={north}>
                    <Text style={styles.northText}>North</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.rowMiddle}>

                <TouchableOpacity
                    style={[styles.button, { opacity: placed && x > MIN_X ? 1 : 0.5 }]}
                    disabled={placed && x > MIN_X ? false : true}
                    onPress={west}
                >
                    <Text style={styles.northText}>West</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { opacity: placed && x < MAX_X ? 1 : 0.5 }]}
                    disabled={placed && x < MAX_X ? false : true}
                    onPress={east}
                >
                    <Text style={styles.eastText}>East</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.rowTopBottom}>
                <TouchableOpacity
                    style={[styles.button, { opacity: placed && y > MIN_Y ? 1 : 0.5 }]}
                    disabled={placed && y > MIN_Y ? false : true}
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
        width: 250,
        height: 90,
        alignItems: "center",
        marginTop: 10

    },
    rowTopBottom: {
        borderWidth: 1,
        width: 250 / 3,
        height: 30,
    },
    rowMiddle: {
        flexDirection: "row",
        borderWidth: 1,
        width: 250,
        height: 30,
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
