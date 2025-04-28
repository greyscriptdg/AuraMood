import React from 'react';
import { StyleSheet, View, Text, ScrollView, Animated } from 'react-native';
import { MoodHistory } from '../utils/moodData';

interface MoodHistoryProps {
  history: MoodHistory[];
  isDarkMode: boolean;
}

export const MoodHistoryList: React.FC<MoodHistoryProps> = ({ history, isDarkMode }) => {
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#333333' }]}>
        Recent Moods
      </Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {history.map((item, index) => (
          <Animated.View
            key={index}
            style={[
              styles.historyCard,
              {
                backgroundColor: isDarkMode
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.05)',
                borderColor: isDarkMode
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.1)',
              },
            ]}
          >
            <Text style={[styles.moodText, { color: isDarkMode ? '#FFFFFF' : '#333333' }]}>
              {item.mood}
            </Text>
            <Text style={[styles.timeText, { color: isDarkMode ? '#FFFFFF' : '#333333' }]}>
              {formatTime(item.timestamp)}
            </Text>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  scrollContent: {
    paddingRight: 20,
  },
  historyCard: {
    padding: 12,
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 1,
    minWidth: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  moodText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 12,
    opacity: 0.7,
  },
}); 