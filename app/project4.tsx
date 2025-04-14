import { View, Text, StyleSheet } from 'react-native';

export default function Project2() {
  return (
    <View style={styles.container}>
      <Text>Project 2: Hello World!</Text>
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
