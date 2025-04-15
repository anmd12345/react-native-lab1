import { StyleSheet } from 'react-native';
import MyButton from './mybutton';

export default function Project2() {
  return (
    <MyButton style={styles.container} onPress={() => alert('Hello World!')} title={'Click Me!'}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
