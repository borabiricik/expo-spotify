import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontBold } from "../../../../styles";

const RecentTop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Good Evening</Text>
      <View style={styles.iconsContainer}>
        <Image source={require("../assets/icons/Notification.png")} />
        <Image source={require("../assets/icons/Recents.png")} />
        <Image source={require("../assets/icons/Settings.png")} />
      </View>
    </View>
  );
};

export default RecentTop;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
  },
  headerText: {
    fontFamily: fontBold,
    color: "#fff",
    fontSize: 19,
  },
});
