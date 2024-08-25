import { useMemo, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Placeholders({ word, onLetterClick, letterIndex }) {
  const letters = useMemo(() => word.split(''));

  const getScaleStyles = () => {
    const len = word.length;
    if (len <= 9) {
      return {};
    } else if (len <= 11) {
      return scale1.container;
    } else if (len <= 13) {
      return scale2.container;
    } else if (len <= 15) {
      return scale3.container;
    } else {
      return scale4.container;
    }
  };

  return (
    <View style={{ ...styles.container, ...getScaleStyles() }}>
      {letters.map((letter, i) => {
        return (
          <View style={styles.textContainer} key={i}>
            {i < letterIndex ? <Text style={styles.text}>{letter}</Text> : null}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // maxWidth: '100%',
    justifyContent: 'center',
    // flexWrap: 'wrap',
    flexDirection: 'row',
    display: 'flex',
    transform: 'scale(1)',
  },

  textContainer: {
    alignItems: 'center',
    padding: 0,
    borderBottomWidth: 2,
    borderRadius: 5,
    height: 55,
    minWidth: 40,
  },

  text: {
    fontSize: 42,
  },
});

const scale1 = StyleSheet.create({
  container: {
    transform: 'scale(.8)',
  },
});


const scale2 = StyleSheet.create({
  container: {
    transform: 'scale(.65)',
  },
});

const scale3 = StyleSheet.create({
  container: {
    transform: 'scale(.6)',
  },
});

const scale4 = StyleSheet.create({
  container: {
    transform: 'scale(.4)',
  },
});
