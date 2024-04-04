import { useMemo, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import { getMangledLetters } from './utils';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export default function LetterSelection({ word, onLetterClick, hiddenIndices }) {
  const mangledLetters = useMemo(() => getMangledLetters(word), [word]);
  // const mangledLetters = useMemo(() => word.split(''), [word]);

  let pressHandler = () => {};

  return (
    <View style={styles.mangled}>
    {/*<FadeInView style={styles.mangled}>*/}
      {mangledLetters.map((letter, i) => {
        pressHandler = () => hiddenIndices[i] ? () => {} : onLetterClick(letter, i);
        return (
          <TouchableOpacity key={`${i}-${letter}-${word}`} onPress={pressHandler}>
            <View style={{
              ...styles.button,
              ...(hiddenIndices[i] ? styles.hidden : {}),
            }}>
              <Text style={styles.buttonText}>{letter}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    {/*</FadeInView>*/}
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
