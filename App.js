import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Plate from './Plate';




export default function App() {


  return (
    <View style={styles.container}>
      <Plate />
      <TouchableOpacity><Text>Place</Text></TouchableOpacity>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"

  },
  row: {
    flexDirection: "row"
  },
});
