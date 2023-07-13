import { View, Text } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native';

export default function DeliveryScreen() {
    const restaurant = featured.restaurants[0];
    const navigation=useNavigation();
  return (
    <View className="flex-1">
      
    </View>
  )
}