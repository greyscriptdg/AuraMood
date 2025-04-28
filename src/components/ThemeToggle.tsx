import React, { useEffect, useRef } from 'react';
import { StyleSheet, Switch, View, Animated } from 'react-native';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDarkMode,
  onToggle,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          backgroundColor: isDarkMode
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.05)',
        },
      ]}
    >
      <Switch
        value={isDarkMode}
        onValueChange={onToggle}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkMode ? '#6C63FF' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
