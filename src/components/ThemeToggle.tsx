// ThemeToggle: Button to toggle between light and dark mode
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

// ThemeToggle component
const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: isDarkMode ? '#333333' : '#F5F5F5',
          },
        ]}
        onPress={toggleTheme}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isDarkMode ? 'sunny' : 'moon'}
          size={24}
          color={isDarkMode ? '#FFFFFF' : '#333333'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ThemeToggle;

// Styles for ThemeToggle
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
