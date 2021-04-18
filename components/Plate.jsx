import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Well from './Well';

export default function Plate({ valid, data }) {

    const [wells, setsWells] = useState(data)

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
        justifyContent: "center",
        flexDirection: "column-reverse",
        height: "40%",
        width: "80%",
    },
    row: {
        flexDirection: "row"
    },
});
