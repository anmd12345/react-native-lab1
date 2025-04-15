import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = Readonly<{
  title: string;
}>;

export default function ListItem({ title }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
});
