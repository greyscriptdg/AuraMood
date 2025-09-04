import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { MoodKey } from '../utils/moodData';
import MoodCard from './MoodCard';
import { useTheme } from '../context/ThemeContext';

interface MoodHistoryListProps {
  history: MoodKey[];
}

// MoodHistoryList: Shows the last 5 moods in a horizontal scroll
const MoodHistoryList: React.FC<MoodHistoryListProps> = ({ history }) => {
  const { theme } = useTheme();
  if (!history.length) return null;
  return (
    <View style={styles.historyContainer}>
      <Text style={[styles.historyTitle, { color: theme.text }]}>Recent Moods</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {history.map((mood, idx) => (
          <MoodCard key={idx} mood={mood} isHistory />
        ))}
      </ScrollView>
    </View>
  );
};

export default MoodHistoryList;

const styles = StyleSheet.create({
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