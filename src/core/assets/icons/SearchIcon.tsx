import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconProps } from '../../types/icons/IconProps'



const SearchIcon = (props:IconProps) => {
  return (
      <Image source={props.focused ? require('./SearchIconActive.png') : require('./SearchIcon.png')}/>
    
  )
}

export default SearchIcon

const styles = StyleSheet.create({})