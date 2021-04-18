import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
/*
    This component takes in the newX, newY which are the values of the inputed x, y from TextInputs.
    onPress is function passed in to perform place functionality.
    handleXChangeText, handleYChangeText functions passed in to perform functionality for each text input.
    place button is enabled when newX, newY are valid inputs which are validated in functions passed in if either
    input is null the entries input have not been validated or are in initial state.
    Inputs have number-pad as keyboard and x input field is auto foccused and when valid entry is received 
    focus is moved to y input field.

*/
export default function Place({ newX, newY, onPress, handleXChangeText, handleYChangeText }) {
    const inputs = {};

    const focusNextField = (id) => {
        inputs[id].focus();
    }
    return (
        <>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Y</Text>
                <Text style={styles.headingText}>X</Text>
            </View>
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

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    heading: {
        flexDirection: "row-reverse",
        marginTop: 20,
        width: 250

    },
    headingText: {
        width: 250 / 3,
        height: 20,
        textAlign: "center"
    },
    placeContainer: {
        flexDirection: "row",
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
