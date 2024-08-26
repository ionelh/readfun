import { useState, useMemo, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import SubstringSelection from './SubstringSelection';
import Placeholders from './Placeholders';

export default function PracticeWord({ image, word, completeHandler, substrings }) {
  const [crtSubstringIndex, setCrtSubstringIndex] = useState(0);
  const [crtLetterIndex, setCrtLetterIndex] = useState(0);
  const [hiddenIndices, setHiddenIndices] = useState({});

  useEffect(() => {
    setCrtSubstringIndex(0);
    setCrtLetterIndex(0);
    setHiddenIndices({});
  }, [word]);

  useEffect(() => {
    if (crtLetterIndex === word.length) {
      completeHandler();
    }
  }, [crtLetterIndex]);

  const handleSubstringClick = (substring, mangledIndex) => {
    if (substring === substrings[crtSubstringIndex]) {
      setCrtSubstringIndex(crtSubstringIndex + 1);
      setCrtLetterIndex(crtLetterIndex + substring.length);
      addHiddenIndex(mangledIndex);
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
          letterIndex={crtLetterIndex}
        />
      </View>
      <SubstringSelection
        word={substrings}
        onSubstringClick={handleSubstringClick}
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
