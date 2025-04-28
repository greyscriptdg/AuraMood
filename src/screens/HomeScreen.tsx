import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { AuraBackground } from '../components/AuraBackground';
import { EmojiSlider } from '../components/EmojiSlider';
import { MoodCard } from '../components/MoodCard';
import { ThemeToggle } from '../components/ThemeToggle';
import * as Haptics from 'expo-haptics';
import { Mood } from '../types/mood';

const motivationalMessages = {
  sad: "It's okay to feel down. Tomorrow is a new day.",
  neutral: "Every moment is a fresh beginning.",
  happy: "Your happiness is contagious!",
  excited: "The world is full of possibilities!",
  ecstatic: "You're radiating positive energy!",
};

export default function HomeScreen() {
  const { theme } = useTheme();
  const [currentMood, setCurrentMood] = useState<Mood>('neutral');
  const [moodHistory, setMoodHistory] = useState<Mood[]>([]);

  const handleMoodChange = (mood: Mood) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCurrentMood(mood);
    setMoodHistory(prev => {
      const newHistory = [mood, ...prev].slice(0, 5);
      return newHistory;
    });
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <AuraBackground mood={currentMood} />
      <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
        <ThemeToggle />
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.text }]}>How are you feeling?</Text>
        </View>
        <EmojiSlider
          onMoodChange={handleMoodChange}
          currentMood={currentMood}
        />
        <MoodCard
          mood={currentMood}
        />
        <Text style={[styles.motivationalMessage, { color: theme.text }]}>
          {motivationalMessages[currentMood]}
        </Text>
        {moodHistory.length > 0 && (
          <View style={styles.historyContainer}>
            <Text style={[styles.historyTitle, { color: theme.text }]}>Recent Moods</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {moodHistory.map((mood, index) => (
                <MoodCard
                  key={index}
                  mood={mood}
                  isHistory
                />
              ))}
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

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
