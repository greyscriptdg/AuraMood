import React from 'react';
<<<<<<< Updated upstream
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
=======
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
>>>>>>> Stashed changes

export default function App(): React.ReactElement {
  return (
<<<<<<< Updated upstream
    <View style={styles.container}>
      <Text>Welcome to AuraMood!</Text>
      <StatusBar style="auto" />
    </View>
=======
    <ThemeProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ThemeProvider>
>>>>>>> Stashed changes
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< Updated upstream
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
=======
>>>>>>> Stashed changes
  },
}); 