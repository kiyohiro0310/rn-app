import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Colours } from '../../constants/colours'

const NumberContainer = ({children}) => {
  return (
    <View style={sytles.container}>
        <Text style={sytles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width;

const sytles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colours.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colours.accent500,
        fontSize: deviceWidth < 380 ? 12 : 24,
        // fontWeight: 'bold',
        fontFamily: 'open-sans-bold'
    }
});