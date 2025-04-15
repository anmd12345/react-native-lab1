import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function Project7() {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text>What is your name?</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginTop: 10, marginBottom: 10 }} 
        placeholder='Enter your name' />
      <Button title="Submit" onPress={() => alert(`Hello ${name}`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
