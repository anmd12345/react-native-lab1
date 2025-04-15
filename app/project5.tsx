import { View, Text, StyleSheet } from 'react-native';

export default () => {
  return (<View style={styles.container}>
    <Square text="1" />
    <Square text="2" />
    <Square text="3" />
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text_white:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

const Square = ({ text }: { text: string }) => (
  <View style={styles.box}>
    <Text style={styles.text_white}>{text}</Text>
  </View>
);
