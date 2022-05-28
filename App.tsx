import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { Provider } from "react-redux";
import MainRouter from "./src/core/components/MainRouter";
import { store } from "./src/core/redux";
import { mainTextStyles } from "./src/core/styles";
import 'react-native-gesture-handler'

export default function App() {
  const [loaded] = useFonts({
    CircularStd_Medium: require("./src/core/assets/fonts/CircularStd-Medium.ttf"),
    CircularStd_MediumItalic: require("./src/core/assets/fonts/CircularStd-MediumItalic.ttf"),
    CircularStd_Bold: require("./src/core/assets/fonts/CircularStd-Bold.ttf"),
  });
  if (loaded) {
    return (
      <Provider store={store}>
        <StatusBar style="inverted" />
        <MainRouter />
      </Provider>
    );
  } else {
    return <Text>Loading...</Text>;
  }
}

const styles = StyleSheet.create({

  text: {
    ...mainTextStyles,
    fontSize: 20,
  },
});
