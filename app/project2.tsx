import { View, Button, TouchableOpacity, StyleSheet, Alert, Text } from 'react-native';

export default function Project2() {
  return (
    <View style={{ padding: 40 }}>
      {/* <Button title="Press Me" onPress={()=> Alert.alert("Hello!")}></Button> */}
      <TouchableOpacity onPress={() => Alert.alert("Hello!")}><Text style={{ padding: 10, backgroundColor: 'red' }}>Custom text</Text></TouchableOpacity>
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
