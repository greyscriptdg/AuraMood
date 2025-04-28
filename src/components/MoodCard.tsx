<<<<<<< Updated upstream

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
=======
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Mood } from '../types/mood';

const MOODS: { [key in Mood]: { emoji: string; name: string } } = {
  sad: { emoji: '😢', name: 'Sad' },
  neutral: { emoji: '😐', name: 'Neutral' },
  happy: { emoji: '😊', name: 'Happy' },
  excited: { emoji: '😄', name: 'Excited' },
  ecstatic: { emoji: '🤩', name: 'Ecstatic' },
};

interface MoodCardProps {
  mood: Mood;
  isHistory?: boolean;
}

export const MoodCard: React.FC<MoodCardProps> = ({ mood, isHistory = false }) => {
  const { theme } = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.card,
          width: isHistory ? 100 : 'auto',
          marginRight: isHistory ? 10 : 0,
        },
      ]}
    >
      <Text style={styles.emoji}>{MOODS[mood].emoji}</Text>
      <Text style={[styles.moodName, { color: theme.text }]}>{MOODS[mood].name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 10,
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 28,
    marginBottom: 4,
  },
  moodName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
>>>>>>> Stashed changes
  },
});
