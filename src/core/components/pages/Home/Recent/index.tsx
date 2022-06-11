import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecentTop from './RecentTop'
import RecentPlaylists from './RecentPlaylists'

const Recent = () => {
  return (
    <View>
      <RecentTop />
      <RecentPlaylists />
    </View>
  )
}

export default Recent

const styles = StyleSheet.create({})