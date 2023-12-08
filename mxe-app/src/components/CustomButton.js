import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({btnTile, onPress, disabled, textColor, width, backgroundColor, height}) => {
  return (
    <TouchableOpacity disabled={disabled} style={{backgroundColor:backgroundColor, width:width, height:height, borderRadius:5, alignItems:"center", justifyContent:"center"}} onPress={onPress}>
      <Text style={{color:textColor, fontWeight:"bold"}}>{btnTile}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})