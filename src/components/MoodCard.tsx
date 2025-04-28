import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';

interface MoodCardProps {
  mood: string;
  isDarkMode: boolean;
}

export const MoodCard: React.FC<MoodCardProps> = ({ mood, isDarkMode }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, [mood]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
          backgroundColor: isDarkMode
            ? 'rgba(18, 18, 18, 0.7)'
            : 'rgba(255, 255, 255, 0.7)',
          borderColor: isDarkMode
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)',
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: isDarkMode ? '#FFFFFF' : '#333333' },
        ]}
      >
        Current Mood
      </Text>
      <Text style={[styles.mood, { color: '#6C63FF' }]}>
        {mood}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    borderRadius: 20,
    margin: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    opacity: 0.8,
  },
  mood: {
    fontSize: 32,
    fontWeight: '700',
  },
});
