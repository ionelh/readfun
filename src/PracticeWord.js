import { useState, useMemo, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LetterSelection from './LetterSelection';

export default function PracticeWord({ image, word, completeHandler }) {
  const [letterIndex, setLetterIndex] = useState(0);
  const [hiddenIndices, setHiddenIndices] = useState({});
  const wordArr = useMemo(() => {
    return word.split('');
  }, [word]);

  const incrementWordIndex = () => setLetterIndex(letterIndex + 1);

  useEffect(() => {
    setLetterIndex(0);
    setHiddenIndices({});
  }, [word]);

  const handleLetterClick = (letter, mangledIndex) => {
    if (letter === wordArr[letterIndex]) {
      incrementWordIndex();
      addHiddenIndex(mangledIndex);
    }

    if (letterIndex === word.length - 1) {
      completeHandler();
    }
  };

  const addHiddenIndex = (index) => {
    setHiddenIndices({ ...hiddenIndices, [index]: true });
  };

  return (
    <View style={{...styles.container}}>
      <Image source={image} style={styles.image} />
      <Text style={styles.placeholder}>
        {wordArr.map((letter, i) => {
          return (i < letterIndex ? letter : '_') + `${i === word.length - 1 ? '' : ' '}`;
        })}
      </Text>
      <LetterSelection
        word={word}
        onLetterClick={handleLetterClick}
        hiddenIndices={hiddenIndices}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkorange',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },

  image: {
    // width: 150,
    // height: 150,
  },

  placeholder: {
    fontSize: 80,
  },
});
