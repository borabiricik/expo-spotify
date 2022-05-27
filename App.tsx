import { Audio } from "expo-av";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { mainBackgroundColor, mainTextStyles } from "./src/core/styles";

export default function App() {
  const [sound, setsound] = useState<Audio.Sound|null >();
  const playSound = async () => {
    console.log("Loading sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./src/core/sounds/track06.mp3")
    );
    setsound(sound);

    console.log("Playing sound");
    await sound.playAsync();
  };

  const stopSound = async () => {
    console.log('Stopping sound')
    await sound?.stopAsync()
    setsound(null)
    console.log('Sound stopped')
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const [loaded] = useFonts({
    CircularStd_Medium: require("./src/core/assets/fonts/CircularStd-Medium.ttf"),
    CircularStd_MediumItalic: require("./src/core/assets/fonts/CircularStd-MediumItalic.ttf"),
  });
  if (loaded) {
    return (
      <View style={styles.container}>
        <Button title="Play Sound" onPress={playSound} />
        <Button title="Stop sound" onPress={stopSound}  />
        <StatusBar style="inverted" />
      </View>
    );
  } else {
    return <Text>Loading...</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    ...mainTextStyles,
    fontSize: 20,
  },
});
