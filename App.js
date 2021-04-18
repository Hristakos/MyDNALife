import React, { useState } from 'react';
import { StyleSheet, View, Keyboard, SafeAreaView } from 'react-native';
import Plate from './components/Plate';
import Move from './components/Move';
import Place from './components/Place';
import Drop from './components/Drop';
import Detect from './components/Detect';
import Report from './components//Report';
import Robot from './components/Robot';
import constants from './common/constants'

/*
  Used a 2 dimentional array to represent the 5 x 5 plate of wells, it 
  stores the status of a well true = Empty, false = Full.
*/

const data = [
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
]

const { MIN_X, MAX_X, MIN_Y, MAX_Y, VALID_INPUT_LENGTH, EMPTY_TEXT, FULL_TEXT } = constants;
/*
    x , y represent the current positoin of the robot arm over the plate initially are null.
    newX, newY are used to store the inputs of the user before validation and initially are null.
    placed is used to represent if the place command has been peroformed successfully. This will
    enable buttons in child components as successful place command has to be performed first.
    wellsData is used to track the well status (empty or full) in the plate and passed into plate.
    status used to display status of well "EMPTY" or "FULL"
    report used to display output of report press ie (0,0,EMPTY) 
*/
export default function App() {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [newX, setNewX] = useState(null);
  const [newY, setNewY] = useState(null);
  const [placed, setPlaced] = useState(false);
  const [wellsData, setWellsData] = useState(data);
  const [status, setStatus] = useState("");
  const [report, setReport] = useState("");

  /*
    functions passed in to child componets to handle respective button press.
  */
  const handleReport = () => {
    if (!placed) return;
    setReport(`${x} , ${y} , ${wellsData[y][x] ? EMPTY_TEXT : FULL_TEXT}`);

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
    setStatus(wellsData[y][x] ? EMPTY_TEXT : FULL_TEXT);

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
  /*
    functions used to handle coressponding onChangeText.
    went with the approach of making sure each value was a valid string
    when converting value to number using android number-pad which has "."  "-" "," was these keys
    were passing validation of range of number (< 0 or > 4)
  */
  const handleXChange = (value) => {
    if (value.length !== VALID_INPUT_LENGTH) {
      return;
    }

    if (value !== "0" && value !== "1" && value !== "2" && value !== "3" && value !== "4") {
      setNewX(null);
      Keyboard.dismiss();
      return;
    }

    // if (Number(value) < MIN_X || Number(value) > MAX_X) {
    //   setNewX(null);
    //   Keyboard.dismiss();
    //   return;
    // }

    setStatus("");
    setReport("");
    setNewX(Number(value));
    Keyboard.dismiss();
  }

  const handleYChange = (value) => {
    if (value.length !== VALID_INPUT_LENGTH) {
      return;
    }

    if (value !== "0" && value !== "1" && value !== "2" && value !== "3" && value !== "4") {
      setNewY(null);
      Keyboard.dismiss();
      return;
    }

    // if (Number(value) < MIN_Y || Number(value) > MAX_Y) {
    //   setNewY(null);
    //   Keyboard.dismiss();
    //   return;
    // }
    setStatus("");
    setReport("");
    setNewY(Number(value));
    Keyboard.dismiss();
  }
  /*
    This is the main screen with all the components layed out.

  */

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.robotPlateContainer}>
        <Plate
          data={wellsData}
        />
        <Robot
          x={placed ? x : -1}
          y={y}
        />
      </View>

      <Place
        newX={newX}
        newY={newY}
        handleXChangeText={handleXChange}
        handleYChangeText={handleYChange}
        onPress={handlePlace}
      />

      <Move
        placed={placed}
        x={x}
        y={y}
        north={handleNorthPress}
        east={handleEastPress}
        south={handleSouthPress}
        west={handleWestPress}
      />

      <Drop
        placed={placed}
        onPress={handleDrop}
        wellStatus={placed ? wellsData[y][x] : false}
      />

      <Detect
        placed={placed}
        onPress={handleDetect}
        status={status}
      />

      <Report
        placed={placed}
        onPress={handleReport}
        report={report}
      />
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
