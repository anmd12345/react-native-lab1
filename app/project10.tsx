import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, Alert } from 'react-native';

const ListItem = ({ title }: { title: string }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{title}</Text>
  </View>
);

export default function ProjectMiniApp() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if (input.trim().length > 0) {
      setItems(prev => [...prev, input]);
      setInput('');
      Alert.alert('Success', 'Add item is successfully');
    } else {
      Alert.alert('Oops!', 'Add item is error');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter item"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add Item" onPress={handleAddItem} />
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
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  item: {
    padding: 15,
    backgroundColor: '#eee',
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
});
