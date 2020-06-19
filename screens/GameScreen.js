import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const generateRandomNumberBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumberBetween(1, 100, props.useChoice)
  );

  return <View></View>;
};

const styles = StyleSheet.create({});

export default GameScreen;
