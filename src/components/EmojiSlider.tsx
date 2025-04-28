import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { MOODS } from '../utils/moodData';

const { width } = Dimensions.get('window');
const EMOJI_SIZE = 50;
const EMOJI_SPACING = 20;

interface EmojiSliderProps {
  onMoodChange: (mood: string, index: number) => void;
  isDarkMode: boolean;
}

export const EmojiSlider: React.FC<EmojiSliderProps> = ({ onMoodChange, isDarkMode }) => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const messageAnim = useRef(new Animated.Value(1)).current;

  const handleEmojiPress = (index: number) => {
    // Fade out message
    Animated.timing(messageAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setSelectedIndex(index);
      onMoodChange(MOODS[index].name, index);
      
      // Bounce animation
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        }),
      ]).start();

      // Fade in message
      Animated.timing(messageAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: isDarkMode ? '#FFFFFF' : '#333333' }]}>
        How are you feeling today?
      </Text>
      <View style={styles.sliderContainer}>
        {MOODS.map((mood, index) => {
          const isSelected = index === selectedIndex;
          const scale = isSelected ? scaleAnim : 1;
          
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleEmojiPress(index)}
              activeOpacity={0.7}
            >
              <Animated.View
                style={[
                  styles.emojiContainer,
                  {
                    transform: [{ scale }],
                    opacity: isSelected ? 1 : 0.5,
                    backgroundColor: isSelected
                      ? isDarkMode
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.05)'
                      : 'transparent',
                  },
                ]}
              >
                <Text style={styles.emoji}>{mood.emoji}</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
      <Animated.View style={[styles.messageContainer, { opacity: messageAnim }]}>
        <Text style={[styles.message, { color: isDarkMode ? '#FFFFFF' : '#333333' }]}>
          {MOODS[selectedIndex].message}
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 40,
    paddingHorizontal: 20,
  },
  emojiContainer: {
    width: EMOJI_SIZE,
    height: EMOJI_SIZE,
    borderRadius: EMOJI_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: EMOJI_SPACING / 2,
  },
  emoji: {
    fontSize: 30,
  },
  messageContainer: {
    marginTop: 20,
    padding: 10,
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    opacity: 0.8,
  },
});
