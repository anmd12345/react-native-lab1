import { View, Text, StyleSheet } from 'react-native';

export default function Project1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa', 
    justifyContent: 'center',  
    alignItems: 'center',       
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
