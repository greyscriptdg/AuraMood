
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import EmojiSlider from '../components/EmojiSlider';
import MoodCard from '../components/MoodCard';
import AuraBackground from '../components/AuraBackground';
import ThemeToggle from '../components/ThemeToggle';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuraBackground />
      <View style={{ flex: 1, padding: 20 }}>
        <ThemeToggle />
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 20 }}>
          How are you feeling today?
        </Text>
        <EmojiSlider />
        <MoodCard mood="Happy" description="Feeling light and joyful." />
      </View>
    </SafeAreaView>
  );
}
