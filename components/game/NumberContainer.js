import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colours } from '../../constants/colours'

const NumberContainer = ({children}) => {
  return (
    <View style={sytles.container}>
        <Text style={sytles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const sytles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colours.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colours.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    }
})