import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Well from './Well';


// Store the status of a well true = Empty, false = Full

const wells = [
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
]


export default function Plate() {
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);

    return (
        <View style={styles.container}>
            {
                wells.map((row, yIndex) => (
                    <View style={styles.row}
                        key={yIndex}>
                        {row.map((wellStatus, xIndex) =>
                            <Well
                                key={xIndex}
                                status={wellStatus}
                                x={xIndex}
                                y={yIndex}
                            />
                        )}
                    </View>
                ))
            }
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "column-reverse"
    },
    row: {
        flexDirection: "row"
    },
});
