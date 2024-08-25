import { useState, useMemo, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import LetterSelection from './LetterSelection';
import Placeholders from './Placeholders';

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
      <View style={{ marginBottom: 50, marginTop: 50 }}>
        <Placeholders
          word={word}
          onLetterClick={handleLetterClick}
          letterIndex={letterIndex}
        />
      </View>
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
