
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { View,Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';



export default function app() {


  return (
<View className='flex flex-1 justify-center items-center'>
<Text  className='text-5xl'>
raja!
<Link href='/home' className=''>go home</Link>
</Text>
</View>
  );
}


