// AuraBackground: Animated background that changes color based on mood
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { useTheme } from '../context/ThemeContext';
import { MoodKey } from '../utils/moodData';

interface AuraBackgroundProps {
  mood: MoodKey;
}

// Animated aura background component using Lottie
const AuraBackground: React.FC<AuraBackgroundProps> = ({ mood }) => {
  const { theme } = useTheme();
  // Map moods to Lottie color filters or different files if needed
  // For now, use one Lottie file and change color via theme
  const lottieRef = useRef<LottieView>(null);

  useEffect(() => {
    // Restart animation on mood change
    lottieRef.current?.reset();
    lottieRef.current?.play();
  }, [mood]);

  return (
    <View style={styles.container} pointerEvents="none">
      <LottieView
        ref={lottieRef}
        source={require('../../assets/lottie/aura_background.json')}
        autoPlay
        loop
        style={styles.lottie}
        // Optionally, you can use color filters or pass props to change color based on mood
      />
    </View>
  );
};

export default AuraBackground;

// Styles for AuraBackground
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    zIndex: -1,
  },
  lottie: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
