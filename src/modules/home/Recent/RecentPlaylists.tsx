import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import GridCard from "../../../common/components/GridCard";

const dummyPlaylistData = [
  {
    id: 0,
    name: "Liked Songs",
    isPlaying: true,
    icon: require('../assets/icons/LikedSongs.png'),
  },
  {
    id: 1,
    name: "Playlist 1",
    isPlaying: false,
    icon: require('../assets/icons/Icon1.png'),
  },
  {
    id: 2,
    name: "Playlist 2",
    isPlaying: false,
    icon: require('../assets/icons/Icon2.png'),
  },
  {
    id: 3,
    name: "Playlist 3",
    isPlaying: false,
    icon: require('../assets/icons/Icon3.png'),
  },
  {
    id: 4,
    name: "Playlist 4",
    isPlaying: false,
    icon: require('../assets/icons/Icon4.png'),
  },
  {
    id: 5,
    name: "Playlist 5",
    isPlaying: false,
    icon: require('../assets/icons/Icon5.png'),
  },
  
];

const RecentPlaylists = () => {
  return (
    <View>
      <FlatList
        style={styles.gridCardsContainer}
        data={dummyPlaylistData}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        keyExtractor={({id})=>id.toString()}
        renderItem={({ item: { id, isPlaying, name,icon }, index }) => (
          <GridCard id={id} isPlaying={isPlaying} title={name} icon={icon}  />
        )}
      />
    </View>
  );
};

export default RecentPlaylists;

const styles = StyleSheet.create({
  gridCardsContainer: {
    paddingVertical: 20,
  },
});
