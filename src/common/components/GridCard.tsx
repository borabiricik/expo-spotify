import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { cardContainer, fontBold, fontNormal } from "../../core/styles";
import { BlurView } from "expo-blur";

export interface IGridCardProps {
  id: number;
  title: string;
  isPlaying: boolean;
  icon?: any;
}

const GridCard = (props: IGridCardProps) => {
  const { id, isPlaying, title, icon } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <BlurView style={styles.blurViewContainer} intensity={30}>
        <Image source={icon} />
        <View style={styles.cardBody}>
          <Text style={styles.cardText}>{title}</Text>
          {isPlaying && (
            <Image
              source={require("../../core/components/pages/Home/assets/icons/Dots.png")}
            />
          )}
        </View>
      </BlurView>
    </TouchableOpacity>
  );
};

export default GridCard;

const styles = StyleSheet.create({
  container: {
    width: "48.5%",
  },
  blurViewContainer: {
    borderRadius: 5,
    marginVertical: 4,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    color: "white",
    fontFamily: fontBold,
    fontSize: 11,
  },
  cardBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 8,
  },
});
