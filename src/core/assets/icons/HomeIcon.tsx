import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconProps } from "../../types/icons/IconProps";

const HomeIcon = (props: IconProps) => {
  return props.focused ? (
    <Image width={30} height={30} source={require("./HomeIconActive.png")} />
  ) : (
    <Image width={30} height={30} source={require("./HomeIcon.png")} />
  );
};

export default HomeIcon;
