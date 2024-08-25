import { useState, useEffect, useMemo } from 'react';
import PracticeWord from './PracticeWord';
import AnswerQuestion from './AnswerQuestion';
import { getRandom, removeIndex } from './utils';
import CONFIG from './config';

const getNewIndex = (CONFIG) => {
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

const newConfigIndexGetter = getNewIndex(CONFIG);

export default function PracticeWords() {
  const [crtConfigIndex, setCrtConfigIndex] = useState(null);

  useEffect(() => {
    setCrtConfigIndex(newConfigIndexGetter());
  }, []);

  const word = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!CONFIG[crtConfigIndex].word) return;
    return CONFIG[crtConfigIndex].word;
  }, [crtConfigIndex]);

  const image = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!CONFIG[crtConfigIndex].image) return;
    return CONFIG[crtConfigIndex].image;
  }, [crtConfigIndex]);

  const imageAnswers = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!CONFIG[crtConfigIndex].imageAnswers) return;
    return CONFIG[crtConfigIndex].imageAnswers.images;
  }, [crtConfigIndex]);

  const correctAnswerIndexes = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!CONFIG[crtConfigIndex].imageAnswers) return;
    return CONFIG[crtConfigIndex].imageAnswers.correct;
  }, [crtConfigIndex]);

  const question = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!CONFIG[crtConfigIndex].question) return;
    return CONFIG[crtConfigIndex].question;
  }, [crtConfigIndex]);

  const handleNext = () => {
    setCrtConfigIndex(newConfigIndexGetter());
  };

  if (crtConfigIndex === null) {
    return null;
  } else if (CONFIG[crtConfigIndex].word) {
    return (
      <PracticeWord
        word={word}
        image={image}
        completeHandler={handleNext}
      />
    );
  } else if (CONFIG[crtConfigIndex].question) {
    return (
      <AnswerQuestion
        word={word}
        imageAnswers={imageAnswers}
        question={question}
        correctAnswerIndexes={correctAnswerIndexes}
        handleNext={handleNext}
      />
    );
  }
}
