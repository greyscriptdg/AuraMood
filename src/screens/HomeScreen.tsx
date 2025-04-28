import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { AuraBackground } from '../components/AuraBackground';
import { EmojiSlider } from '../components/EmojiSlider';
import { MoodCard } from '../components/MoodCard';
import { ThemeToggle } from '../components/ThemeToggle';
import { MoodHistoryList } from '../components/MoodHistory';
import { MOODS, MAX_HISTORY, MoodHistory } from '../utils/moodData';

export const HomeScreen: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentMoodIndex, setCurrentMoodIndex] = useState(2);
  const [moodHistory, setMoodHistory] = useState<MoodHistory[]>([]);

  const handleMoodChange = (mood: string, index: number) => {
    setCurrentMoodIndex(index);
    
    // Add to history
    const newHistory = [
      { mood, timestamp: Date.now() },
      ...moodHistory.slice(0, MAX_HISTORY - 1),
    ];
    setMoodHistory(newHistory);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuraBackground isDarkMode={isDarkMode} currentMoodIndex={currentMoodIndex} />
      <ThemeToggle isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
      <View style={styles.content}>
        <EmojiSlider 
          onMoodChange={handleMoodChange} 
          isDarkMode={isDarkMode} 
        />
        <MoodCard 
          mood={MOODS[currentMoodIndex].name} 
          isDarkMode={isDarkMode} 
        />
        {moodHistory.length > 0 && (
          <MoodHistoryList 
            history={moodHistory} 
            isDarkMode={isDarkMode} 
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 40,
  },
});
