import { View, Text } from 'react-native'
import React from 'react'
import { Button } from "react-native"

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigation.navigate('Camera')}>Scannez un QR Code</Button>
    </View>
  )
}

export default HomeScreen