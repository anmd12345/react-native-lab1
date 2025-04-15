import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

export default function Project2() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 10 }}>You clicked {count} times</Text>
      
      <View style={{ marginBottom: 10 }}>
        <Button title="Click me" onPress={() => setCount(count + 1)} />
      </View>
      
      <Button title="Reset" color="red" onPress={() => setCount(0)} />
    </View>
  );
}
