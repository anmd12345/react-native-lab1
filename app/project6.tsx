import { ScrollView, Text, StyleSheet } from 'react-native';

export default function Project6() {
  return (
    <ScrollView>
      {[...Array(100).keys()].map((_, i) => (<Text key={i} style={{ fontSize: 20, margin: 10 }}>Hello World {i}</Text>))}
    </ScrollView>
  );
}
