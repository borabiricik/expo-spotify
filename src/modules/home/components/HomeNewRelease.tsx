import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { mainTextColor } from "../../../core/styles";

const HomeNewRelease = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImg}
          source={require("../assets/images/metallica.jpeg")}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.releaseText}>NEW RELEASE FROM</Text>
          <Text style={styles.artistText}>Metallica</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeNewRelease;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  profileContainer: {
    flexDirection: "row",
  },
  profileTextContainer:{
    flexDirection:'column',
    justifyContent:'space-between'
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight:10
  },
  releaseText: {
    fontSize: 9,
    color: "rgba(255, 255, 255, 0.7)",
  },
  artistText:{
      color:mainTextColor
  }
});
