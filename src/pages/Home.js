import React from 'react';
import { View, Text } from 'react-native';

export function Home() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>React Native man</Text>
        <Text style={{ alignSelf: 'center', marginBottom: 20 }}>ignite</Text>
      </View>
    </>
  )
}