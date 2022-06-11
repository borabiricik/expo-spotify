import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Button, Dimensions, SafeAreaView, StyleSheet } from "react-native";
import Recent from "../core/components/pages/Home/Recent";
import { useAppDispatch } from "../core/redux/hook";
import { playSound, stopSound } from "../features/redux/soundStore";

const Home = () => {
  const dispatch = useAppDispatch()
  return (
    //@ts-ignore
    <LinearGradient
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.35, y: 0.35 }}
      colors={["#3B13B0", "#271363", "#121212"]}
    >
      <SafeAreaView>
        <Recent />
        <Button title="Play song" onPress={()=> dispatch(playSound())} />
        <Button title="Stop song" onPress={()=> dispatch(stopSound())} />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Dimensions.get('screen').height/10
  },
});
