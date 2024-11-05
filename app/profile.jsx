import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View>
      <Text>profile</Text>
      <Link href='/b'>home</Link>
    </View>
  )
}

export default profile