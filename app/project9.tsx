import { View, Text, StyleSheet, SectionList } from 'react-native';

const data = [
  { title: 'A', data: ['Apple', 'Banana'] },
  { title: 'B', data: ['vegetable 1', 'vegetable 2'] }
]

export default function Project2() {
  return (
    <SectionList style={{ padding: 30 }}
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ fontWeight: 'bold', backgroundColor: '#eee' }}>{title}</Text>
      )}
    />
  );
}
