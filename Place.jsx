import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

export default function Place({ newX, newY, handlePlacePress, handleXChangeText, handleYChangeText }) {
    return (
        <View style={styles.placeContainer}>
            <TouchableOpacity
                style={[styles.place, { opacity: newY === null || newX === null ? 0.5 : 1 }]}
                disabled={newY === null || newX === null ? true : false}
                onPress={handlePlacePress}
            >
                <Text >Place</Text>

            </TouchableOpacity>
            <View style={styles.text}>

                <TextInput
                    style={styles.xInput}
                    placeholder="Enter X Value"
                    keyboardType="number-pad"
                    maxLength={1}
                    onChangeText={handleXChangeText}
                />
                <Text>X</Text>
            </View>
            <View style={styles.text}>

                <TextInput
                    style={styles.xInput}
                    placeholder="Enter Y Value"
                    keyboardType="number-pad"
                    maxLength={1}
                    onChangeText={handleYChangeText}
                />
                <Text>Y</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    placeContainer: {
        flexDirection: "row"
    },
    row: {
        flexDirection: "row"
    },
    place: {
        width: 100,
        height: 50,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center"
    },
    xInput: {
        width: 100,
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        textAlign: "center"
    },
    text: {
        alignItems: "center"
    }
})
