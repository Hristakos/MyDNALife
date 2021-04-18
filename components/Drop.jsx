import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
/*
This component takes in placed true/false, onPress function to handle press and wellStatus
which indicated if well is empty or full. true means empty false means full.
The button will be enabled only when placed command has been executed and the well is empty.
*/
export default function Drop({ placed, onPress, wellStatus }) {

    return (
        <View>
            <TouchableOpacity
                style={[styles.container, { opacity: wellStatus ? 1 : 0.5 }]}
                disabled={!placed || !wellStatus}
                onPress={onPress}>
                <Text>Drop</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: "dodgerblue",
        width: 250,
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    }
})
