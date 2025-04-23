
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
