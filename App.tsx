import { Audio } from "expo-av";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/core/redux";
import { useAppDispatch } from "./src/core/redux/hook";
import { mainBackgroundColor, mainTextStyles } from "./src/core/styles";
import { playSound } from "./src/features/redux/soundStore";
import Home from "./src/pages/Home";

export default function App() {



  const [loaded] = useFonts({
    CircularStd_Medium: require("./src/core/assets/fonts/CircularStd-Medium.ttf"),
    CircularStd_MediumItalic: require("./src/core/assets/fonts/CircularStd-MediumItalic.ttf"),
  });
  if (loaded) {
    return (
      <Provider store={store}>
        <StatusBar style="inverted" />
        <View style={styles.container}>
          <Home />
        </View>
      </Provider>
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
