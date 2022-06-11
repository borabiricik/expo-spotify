import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecentPlaylists from './RecentPlaylists'
import RecentTop from './RecentTop'

const Recent = () => {
  return (
    <View>
      <RecentTop />
      <RecentPlaylists />
    </View>
  )
}

export default Recent