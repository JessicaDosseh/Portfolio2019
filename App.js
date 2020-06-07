import React from 'react';
import { View } from 'react-native';
import NavCondition from './src/components/Navigation/NavCondition';
import LandingPage from './src/components/LandingPage/LandingPage';
export default function App() {
  return (
    <View>
      <NavCondition />
      <LandingPage />
    </View>
  );
}
