import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

export default function Place({ newX, newY, onPress, handleXChangeText, handleYChangeText }) {
    const inputs = {};

    const focusNextField = (id) => {
        inputs[id].focus();
    }
    return (
        <View style={styles.placeContainer}>
            <TouchableOpacity
                style={[styles.place, { opacity: newY === null || newX === null ? 0.5 : 1 }]}
                disabled={newY === null || newX === null ? true : false}
                onPress={onPress}
            >
                <Text >Place</Text>

            </TouchableOpacity>
            <View style={styles.text}>

                <TextInput
                    style={styles.input}
                    placeholder="X Value"
                    keyboardType="number-pad"
                    maxLength={1}
                    onChangeText={handleXChangeText}
                    autoFocus={true}
                    blurOnSubmit={true}
                    onEndEditing={() => {
                        focusNextField('two');
                    }}
                    ref={input => {
                        inputs['one'] = input;
                    }}
                    returnKeyType={"done"}
                />

                <Text>X</Text>
            </View>
            <View style={styles.text}>

                <TextInput
                    style={styles.input}
                    placeholder="Y Value"
                    keyboardType="number-pad"
                    maxLength={1}
                    onChangeText={handleYChangeText}
                    blurOnSubmit={true}
                    returnKeyType={"done"}
                    ref={input => {
                        inputs['two'] = input;
                    }}

                />
                <Text>Y</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    placeContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    row: {
        flexDirection: "row"
    },
    place: {
        width: 250 / 3,
        height: 30,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: 250 / 3,
        height: 30,
        borderWidth: 1,
        borderColor: "black",
        textAlign: "center"
    },
    text: {
        alignItems: "center"
    }
})
