import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Well from './Well';


// Store the status of a well true = Empty, false = Full

const data = [
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
]


export default function Plate({ posX, posY, valid }) {
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [wells, setsWells] = useState(data)
    console.log("pos x = " + posX + " pos y = " + posY);
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
                                currentX={posX}
                                currentY={posY}
                                placed={valid}
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
