
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function AuraBackground() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#222831',
  },
});
