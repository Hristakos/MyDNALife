import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Well({ status, x, y, currentX, currentY, placed }) {
    const [xIndex, setXIndex] = useState(x);
    const [yIndex, setYIndex] = useState(y);

    return (
        <View style={[styles.container, { backgroundColor: currentX === x && currentY === y && placed ? "black" : status ? "white" : "blue" }]}>
            <Text>x{xIndex}, y{yIndex}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        borderWidth: 1,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
});

