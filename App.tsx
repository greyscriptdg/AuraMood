// App.tsx: Entry point for the AuraMood app
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';

const Stack = createNativeStackNavigator();

export default function App(): React.ReactElement {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        {/* Status bar styling */}
        <StatusBar style="auto" />
        {/* Navigation container with HomeScreen */}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
}

// Styles for the app container
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 