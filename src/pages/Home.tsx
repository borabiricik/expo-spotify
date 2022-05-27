import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../core/redux/hook";
import { playSound, stopSound } from "../features/redux/soundStore";

const Home = () => {
  const dispatch = useAppDispatch();
  const { sound } = useAppSelector((state) => state.sounds);

  return (
    <View>
      <Button title="Play Sound" onPress={() => dispatch(playSound())} />
      <Button title="Stop Sound" onPress={() => dispatch(stopSound())} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
