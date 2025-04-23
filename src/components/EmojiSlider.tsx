
import React, { useState } from 'react';
import { View, Text, Slider } from 'react-native';

const emojis = ['😞', '😐', '😊', '😁', '🤩'];

export default function EmojiSlider() {
  const [value, setValue] = useState(2);

  return (
    <View style={{ alignItems: 'center', marginBottom: 30 }}>
      <Text style={{ fontSize: 40 }}>{emojis[Math.round(value)]}</Text>
      <Slider
        style={{ width: '90%', height: 40 }}
        minimumValue={0}
        maximumValue={4}
        step={1}
        value={value}
        onValueChange={setValue}
        minimumTrackTintColor="#00adb5"
        maximumTrackTintColor="#393e46"
      />
    </View>
  );
}
