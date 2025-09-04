// EmojiSlider: Lets the user select their mood using emoji buttons
import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { moods, MoodKey } from '../utils/moodData';

interface EmojiSliderProps {
  onMoodChange: (mood: MoodKey) => void;
  currentMood: MoodKey;
}

// EmojiSlider component
const EmojiSlider: React.FC<EmojiSliderProps> = ({ onMoodChange, currentMood }) => {
  const { theme } = useTheme();
  // Animated values for each emoji
  const anims = useRef(moods.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    // Animate the selected emoji to scale up smoothly
    moods.forEach((mood, idx) => {
      Animated.spring(anims[idx], {
        toValue: currentMood === mood.key ? 1 : 0,
        useNativeDriver: true,
        friction: 5,
        tension: 120,
      }).start();
    });
  }, [currentMood]);

  return (
    <View style={styles.container}>
      {moods.map((mood, idx) => {
        const scale = anims[idx].interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.3],
        });
        return (
          <TouchableOpacity
            key={mood.key}
            style={[
              styles.emojiContainer,
              {
                backgroundColor: currentMood === mood.key ? theme.card : 'transparent',
                borderWidth: currentMood === mood.key ? 2 : 0,
                borderColor: currentMood === mood.key ? theme.text : 'transparent',
              },
            ]}
            onPress={() => onMoodChange(mood.key)}
          >
            <Animated.Text
              style={[
                styles.emoji,
                {
                  color: theme.emoji,
                  transform: [{ scale }],
                },
              ]}
            >
              {mood.emoji}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default EmojiSlider;

// Styles for EmojiSlider
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
