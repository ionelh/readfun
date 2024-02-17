import { useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { getMangledLetters } from './utils';

export default function LetterSelection({ word, onLetterClick, hiddenIndices }) {
  const mangledLetters = useMemo(() => getMangledLetters(word), [word]);
  // const mangledLetters = useMemo(() => word.split(''), [word]);

  return (
    <View style={styles.mangled}>
      {mangledLetters.map((letter, i) => {
        return (
          <TouchableOpacity key={i} onPress={() => onLetterClick(letter, i)}>
            <View style={{
              ...styles.button,
              ...(hiddenIndices[i] ? styles.hidden : {}),
            }}>
              <Text style={styles.buttonText}>{letter}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  hidden: {
    opacity: 0,
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
    width: '90%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'red',
    display: 'flex',
  },
});
