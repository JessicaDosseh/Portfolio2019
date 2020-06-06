import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavCondition from './src/components/Navigation/NavCondition';
import LandingPage from './src/components/LandingPage/LandingPage';
export default function App() {
  return (
    <View style={styles.container}>
      <NavCondition />
      <LandingPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
