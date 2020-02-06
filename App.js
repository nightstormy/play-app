import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Navigator from './routes/HomeStack'

export default function App() {
  return (
    <Navigator />
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});