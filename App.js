import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import Plate from './Plate';
import Move from './Move';
import Place from './Place';




export default function App() {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [newX, setNewX] = useState(null);
  const [newY, setNewY] = useState(null);
  const [placed, setPlaced] = useState(false);

  const handleNorthPress = () => {
    setY(y + 1);
  }
  const handleEastPress = () => {
    setX(x + 1);
  }
  const handleSouthPress = () => {
    setY(y - 1);
  }
  const handleWestPress = () => {
    setX(x - 1);
  }
  const handleXChange = (value) => {

    if (value.length !== 1) {
      return;
    }

    if (value < 0 || value > 4) {
      console.log(`value ${value} is not valid`);
      setNewX(null);
      Keyboard.dismiss();
      return;
    }

    setNewX(Number(value));
    Keyboard.dismiss();


  }
  const handleYChange = (value) => {

    console.log("value y = " + value);
    console.log("y length = " + value.length);
    if (value.length !== 1) {
      return;
    }

    if (value < 0 || value > 4) {
      console.log(`value ${value} is not valid`);
      setNewY(null);
      Keyboard.dismiss();
      return;
    }
    setNewY(Number(value));
    Keyboard.dismiss();

  }

  return (
    <View style={styles.container}>
      <Plate
        posX={x}
        posY={y}
        valid={placed}
      />
      <Place
        newX={newX}
        newY={newY}
        handleXChangeText={handleXChange}
        handleYChangeText={handleYChange}
        handlePlacePress={() => {
          setPlaced(true);
          setX(newX);
          setY(newY);
        }} />
      <Move
        placed={placed}
        x={x}
        y={y}
        north={handleNorthPress}
        east={handleEastPress}
        south={handleSouthPress}
        west={handleWestPress} />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});
