import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Profile = () => {
  return (
    <View>
      <Text>profile</Text>
      <Link href='/b'>home</Link>
    </View>
  )
}

export default Profile