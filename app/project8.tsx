import { View, Text, StyleSheet, FlatList } from 'react-native';

const data = Array.from({ length: 100 }, (_, i) => ({ key: i, name: `Item ${i + 1}` }));


export default function Project8() {

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text>{item.name}</Text>
        </View>
      )}
      keyExtractor={item => item.key.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
