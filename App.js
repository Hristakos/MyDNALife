import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, SafeAreaView } from 'react-native';
import Plate from './components/Plate';
import Move from './components/Move';
import Place from './components/Place';
import Drop from './components/Drop';
import Detect from './components/Detect';
import Report from './components//Report';
import Robot from './components/Robot';

// Store the status of a well true = Empty, false = Full

const data = [
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
]
const MAX_X = 4;
const MAX_Y = 4;
const MIN_X = 0;
const MIN_Y = 0;
const VALID_INPUT_LENGTH = 1;

export default function App() {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [newX, setNewX] = useState(null);
  const [newY, setNewY] = useState(null);
  const [placed, setPlaced] = useState(false);
  const [wellsData, setWellsData] = useState(data);
  const [status, setStatus] = useState("");
  const [report, setReport] = useState("");

  const handleReport = () => {
    if (!placed) return;
    setReport(`${x} , ${y} ${wellsData[y][x] ? "EMPTY" : "FULL"}`);

  }
  const handlePlace = () => {
    setStatus("");
    setReport("");
    setPlaced(true);
    setX(newX);
    setY(newY);
  }
  const handleDetect = () => {
    if (!placed) return;
    setStatus(wellsData[y][x] ? "EMPTY" : "FULL");

  }
  const handleDrop = () => {
    if (!placed) return;
    setStatus("");
    setReport("");
    let newWells = [...wellsData];
    newWells[y][x] = false;
    setWellsData(newWells);
  }
  const handleNorthPress = () => {
    setStatus("");
    setReport("");
    setY(y + 1);
  }
  const handleEastPress = () => {
    setStatus("");
    setReport("");
    setX(x + 1);
  }
  const handleSouthPress = () => {
    setStatus("");
    setReport("");
    setY(y - 1);
  }
  const handleWestPress = () => {
    setStatus("");
    setReport("");
    setX(x - 1);
  }
  const handleXChange = (value) => {

    if (value.length !== 1) {
      return;
    }

    if (value < MIN_X || value > MAX_X) {
      setNewX(null);
      Keyboard.dismiss();
      return;
    }
    setStatus("");
    setReport("");
    setNewX(Number(value));
    Keyboard.dismiss();



  }
  const handleYChange = (value) => {

    if (value.length !== VALID_INPUT_LENGTH) {
      return;
    }

    if (value < MIN_Y || value > MAX_Y) {
      setNewY(null);
      Keyboard.dismiss();
      return;
    }
    setStatus("");
    setReport("");
    setNewY(Number(value));
    Keyboard.dismiss();

  }

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.robotPlateContainer}>
        <Plate
          valid={placed}
          data={wellsData}
        />
        <Robot
          x={x !== null ? x : -1}
          y={y}
        />

      </View>
      <Place
        newX={newX}
        newY={newY}
        handleXChangeText={handleXChange}
        handleYChangeText={handleYChange}
        onPress={handlePlace} />
      <Move
        placed={placed}
        x={x}
        y={y}
        north={handleNorthPress}
        east={handleEastPress}
        south={handleSouthPress}
        west={handleWestPress} />
      <Drop
        placed={placed}
        onPress={handleDrop}
        wellStatus={placed ? wellsData[y][x] : false}
      />
      <Detect
        placed={placed}
        onPress={handleDetect}
        status={status} />

      <Report
        placed={placed}
        onPress={handleReport}
        report={report} />
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "beige"

  },
  robotPlateContainer: {
    marginTop: 20,
    height: 250,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "brown"
  },


});
