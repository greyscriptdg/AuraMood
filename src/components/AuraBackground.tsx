import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { MOODS } from '../utils/moodData';

interface AuraBackgroundProps {
  isDarkMode: boolean;
  currentMoodIndex: number;
}

export const AuraBackground: React.FC<AuraBackgroundProps> = ({ 
  isDarkMode,
  currentMoodIndex 
}) => {
  const colorAnim = useRef(new Animated.Value(0)).current;
  const currentColor = MOODS[currentMoodIndex].auraColor;

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [currentMoodIndex]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lottie/aura_background.json')}
        autoPlay
        loop
        style={styles.animation}
        speed={0.5}
        colorFilters={[
          {
            keypath: 'Layer 1',
            color: currentColor,
          },
        ]}
      />
      <Animated.View 
        style={[
          styles.overlay,
          { 
            backgroundColor: isDarkMode 
              ? 'rgba(0,0,0,0.4)' 
              : 'rgba(255,255,255,0.4)',
            opacity: colorAnim
          }
        ]} 
      />
      <View 
        style={[
          styles.gradientOverlay,
          { 
            backgroundColor: isDarkMode 
              ? 'rgba(0,0,0,0.2)' 
              : 'rgba(255,255,255,0.2)'
          }
        ]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  animation: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
});
