import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LetterSelection from './src/LetterSelection';
import PracticeWords from './src/PracticeWords';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{...styles.viewRow, flex: 1, backgroundColor: 'yellow',}}><Text>Title</Text></View>
      <View style={{...styles.viewRow, flex: 6}}><PracticeWords /></View>
      <View style={{...styles.viewRow, flex: 1, backgroundColor: 'yellow',}}><Text>Footer</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewRow: {
    backgroundColor: 'darkorange',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },

  image: {
    width: 150,
    height: 150,
  },

  placeholder: {
    fontSize: 80,
  },

  button: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    width: 54,
    height: 54,
    padding: 0,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 42,
  },

  mangled: {
    width: '80%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'red',
    display: 'flex',
  },
});
