import { View, Button, TouchableOpacity, Alert, Text, StyleSheet } from 'react-native';

export default function Project2() {
  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={() => Alert.alert("Hello!")} />

      <TouchableOpacity style={styles.customButton} onPress={() => Alert.alert("Hi!")}>
        <Text style={styles.customButtonText}>Custom Text</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  customButton: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  customButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
