import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import ListItem from './listitem';
export default function Project10() {
  const [text, setText] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    if (text.trim()) {
      setItems([...items, text.trim()]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter item"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ListItem title={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, paddingTop: 60
  },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10
  },
});
