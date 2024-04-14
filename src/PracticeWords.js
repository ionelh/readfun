import { useState, useEffect, useMemo } from 'react';
import PracticeWord from './PracticeWord';
import { getRandom, removeIndex } from './utils';
import CONFIG from './config';

const getNewIndex2 = (CONFIG) => {
  let availableIndices = CONFIG.map((value, index) => index);
  let index = 0;
  return () => {
    const newIndex = getRandom(0, availableIndices.length);
    index = newIndex;
    const result = availableIndices[index];
    availableIndices = removeIndex(availableIndices, index);
    return result;
  };
};

const newConfigIndexGetter = getNewIndex2(CONFIG);

export default function PracticeWords() {
  const [crtConfigIndex, setCrtConfigIndex] = useState(null);
  // const [crtConfigIndex, setCrtConfigIndex] = useState(0);

  useEffect(() => {
    setCrtConfigIndex(newConfigIndexGetter());
  }, []);

  const word = useMemo(() => {
    if (crtConfigIndex === null) return;
    return CONFIG[crtConfigIndex].words[getRandom(0, CONFIG[crtConfigIndex].words.length)].word;
  }, [crtConfigIndex]);

  const image = useMemo(() => {
    if (crtConfigIndex === null) return;
    return CONFIG[crtConfigIndex].words[getRandom(0, CONFIG[crtConfigIndex].words.length)].image;
  }, [crtConfigIndex]);

  const handleComplete = () => {
    setCrtConfigIndex(newConfigIndexGetter());
  };

  return crtConfigIndex !== null ? (
    <PracticeWord word={word} image={image} completeHandler={handleComplete} />
    // <PracticeWord word={word} image={require('../assets/kiwi.png')} completeHandler={handleComplete} />
  ) : null;
}
