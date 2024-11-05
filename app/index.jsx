
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { View,Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';



export default function app() {


  return (
<View className='bg-red-500'>
<Text  className='bg-red-500'>
raja!
<Link href='/profile' className=''>go profile</Link>
</Text>
</View>
  );
}


