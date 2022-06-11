import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  mainBackgroundColor,
  mainTextColor,
  secondaryTextColor,
} from "../styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../pages/Home";
import Search from "../../pages/Search";
import Library from "../../pages/Library";
import HomeIcon from "../assets/icons/HomeIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import LibraryIcon from "../assets/icons/LibraryIcon";
import { LinearGradient } from "expo-linear-gradient";

const MainRouter = () => {
  const BottomTabs = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* @ts-ignore */}
        <BottomTabs.Navigator
          screenOptions={{
            tabBarInactiveTintColor: secondaryTextColor,
            tabBarActiveTintColor: mainTextColor,
            headerShown:false,
            headerBackgroundContainerStyle:{
              backgroundColor:'transparent'
            },
            tabBarStyle: {
              backgroundColor: "transparent",
            },
            tabBarLabelStyle: {
              fontFamily: "CircularStd_Medium",
            },
          }}
        >
          <BottomTabs.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
            }}
          />
          <BottomTabs.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({ focused }) => <SearchIcon focused={focused} />,
            }}
          />
          <BottomTabs.Screen
            name="Library"
            component={Library}
            options={{
              tabBarIcon: ({ focused }) => <LibraryIcon focused={focused} />,
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default MainRouter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
    color: "white",
  },
});
