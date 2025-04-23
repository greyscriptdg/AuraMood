
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MoodCard({ mood, description }: { mood: string, description: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{mood}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 15,
    backdropFilter: 'blur(10px)',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: '#eee',
  },
});
