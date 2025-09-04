// MoodCard: Displays the selected mood with emoji and name
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Mood } from '../types/mood';
import { moods, MoodKey } from '../utils/moodData';

// Emoji and name for each mood
const MOODS: { [key in Mood]: { emoji: string; name: string } } = {
  sad: { emoji: '😢', name: 'Sad' },
  neutral: { emoji: '😐', name: 'Neutral' },
  happy: { emoji: '😊', name: 'Happy' },
  excited: { emoji: '😄', name: 'Excited' },
  ecstatic: { emoji: '🤩', name: 'Ecstatic' },
};

interface MoodCardProps {
  mood: MoodKey;
  isHistory?: boolean;
}

// MoodCard component
const MoodCard: React.FC<MoodCardProps> = ({ mood, isHistory = false }) => {
  const { theme } = useTheme();
  // Find mood data from centralized moodData
  const moodData = moods.find(m => m.key === mood);
  if (!moodData) return null;
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
      <Text style={styles.emoji}>{moodData.emoji}</Text>
      <Text style={[styles.moodName, { color: theme.text }]}>{moodData.name}</Text>
    </View>
  );
};

export default MoodCard;

// Styles for MoodCard
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
  },
});
