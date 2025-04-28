<<<<<<< Updated upstream

import React, { useState } from 'react';
import { View, Text, Slider } from 'react-native';

const emojis = ['😞', '😐', '😊', '😁', '🤩'];

export default function EmojiSlider() {
  const [value, setValue] = useState(2);

  return (
    <View style={{ alignItems: 'center', marginBottom: 30 }}>
      <Text style={{ fontSize: 40 }}>{emojis[Math.round(value)]}</Text>
      <Slider
        style={{ width: '90%', height: 40 }}
        minimumValue={0}
        maximumValue={4}
        step={1}
        value={value}
        onValueChange={setValue}
        minimumTrackTintColor="#00adb5"
        maximumTrackTintColor="#393e46"
      />
    </View>
  );
}
=======
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Mood } from '../types/mood';

const MOODS: { [key in Mood]: string } = {
  sad: '😢',
  neutral: '😐',
  happy: '😊',
  excited: '😄',
  ecstatic: '🤩',
};

interface EmojiSliderProps {
  onMoodChange: (mood: Mood) => void;
  currentMood: Mood;
}

export const EmojiSlider: React.FC<EmojiSliderProps> = ({ onMoodChange, currentMood }) => {
  const { theme } = useTheme();
  const moodKeys = Object.keys(MOODS) as Mood[];

  return (
    <View style={styles.container}>
      {moodKeys.map((mood) => (
        <TouchableOpacity
          key={mood}
          style={[
            styles.emojiContainer,
            {
              backgroundColor: currentMood === mood ? theme.card : 'transparent',
              borderWidth: currentMood === mood ? 2 : 0,
              borderColor: currentMood === mood ? theme.text : 'transparent',
            },
          ]}
          onPress={() => onMoodChange(mood)}
        >
          <Text
            style={[
              styles.emoji,
              {
                color: theme.emoji,
                fontSize: currentMood === mood ? 36 : 28,
              },
            ]}
          >
            {MOODS[mood]}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 24,
    paddingHorizontal: 8,
  },
  emojiContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  emoji: {
    fontSize: 28,
  },
});
>>>>>>> Stashed changes
