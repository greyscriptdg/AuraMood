// HomeScreen: Main screen for mood selection and history
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import AuraBackground from '../components/AuraBackground';
import EmojiSlider from '../components/EmojiSlider';
import MoodCard from '../components/MoodCard';
import ThemeToggle from '../components/ThemeToggle';
import * as Haptics from 'expo-haptics';
import { Mood } from '../types/mood';
import { moods, MoodKey } from '../utils/moodData';
import MoodHistoryList from '../components/MoodHistoryList';

// Motivational messages for each mood
const motivationalMessages = {
  sad: "It's okay to feel down. Tomorrow is a new day.",
  neutral: "Every moment is a fresh beginning.",
  happy: "Your happiness is contagious!",
  excited: "The world is full of possibilities!",
  ecstatic: "You're radiating positive energy!",
};

export default function HomeScreen() {
  const { theme } = useTheme();
  const [currentMood, setCurrentMood] = useState<MoodKey>('neutral');
  const [moodHistory, setMoodHistory] = useState<MoodKey[]>([]);

  // Handle mood change from EmojiSlider
  const handleMoodChange = (mood: MoodKey) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCurrentMood(mood);
    setMoodHistory(prev => {
      const newHistory = [mood, ...prev].slice(0, 5);
      return newHistory;
    });
  };

  // Get motivational message from moodData
  const currentMoodData = moods.find(m => m.key === currentMood);
  const motivationalMessage = currentMoodData ? currentMoodData.quote : '';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}> 
      {/* Animated aura background based on mood */}
      <AuraBackground mood={currentMood} />
      <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
        {/* Theme toggle button */}
        <ThemeToggle />
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.text }]}>How are you feeling?</Text>
        </View>
        {/* Emoji slider for mood selection */}
        <EmojiSlider
          onMoodChange={handleMoodChange}
          currentMood={currentMood}
        />
        {/* Main mood card */}
        <MoodCard
          mood={currentMood}
        />
        {/* Motivational message */}
        <Text style={[styles.motivationalMessage, { color: theme.text }]}> 
          {motivationalMessage}
        </Text>
        {/* Mood history cards */}
        <MoodHistoryList history={moodHistory} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles for HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  motivationalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    fontStyle: 'italic',
  },
  historyContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
