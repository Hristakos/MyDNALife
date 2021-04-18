import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Well from './Well';
/*
    This component is the plate which has the 5 x 5 wells.
    data is passed in which is an array that represents the status of each particular well. true indicated 
    that the well is empty fasle indicates full.
    the array is mapped to create the 5 X 5 wells.
    The well components is passed the status of the well so the well can display full or empty color.
*/
export default function Plate({ data }) {

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
