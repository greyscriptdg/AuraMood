<<<<<<< Updated upstream

import React from 'react';
import { Switch, View, Text } from 'react-native';

export default function ThemeToggle() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
      <Text style={{ color: 'white', marginRight: 10 }}>Dark Mode</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#00adb5' }}
        thumbColor={enabled ? '#eeeeee' : '#f4f3f4'}
        onValueChange={() => setEnabled(prev => !prev)}
        value={enabled}
      />
    </View>
  );
}
=======
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
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
>>>>>>> Stashed changes
