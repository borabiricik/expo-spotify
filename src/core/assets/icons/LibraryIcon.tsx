import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconProps } from "../../types/icons/IconProps";

const LibraryIcon = (props:IconProps) => {
  return <Image source={props.focused ? require('./LibraryIconActive.png') : require('./LibraryIcon.png')} />
};

export default LibraryIcon;

const styles = StyleSheet.create({});
