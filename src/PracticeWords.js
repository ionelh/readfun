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
    if (!CONFIG[crtConfigIndex].words) return;
    return CONFIG[crtConfigIndex].words[getRandom(0, CONFIG[crtConfigIndex].words.length)].word;
  }, [crtConfigIndex]);

  const image = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!CONFIG[crtConfigIndex].words) return;
    return CONFIG[crtConfigIndex].words[getRandom(0, CONFIG[crtConfigIndex].words.length)].image;
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

  // return crtConfigIndex !== null ? (
  //   <AnswerQuestion
  //     word={word}
  //     imageAnswers={imageAnswers}
  //     question={question}
  //     correctAnswerIndexes={correctAnswerIndexes}
  //     handleNext={handleNext}
  //   />
  // ) : null;

  return crtConfigIndex !== null ? (
    <PracticeWord word={word} image={image} completeHandler={handleNext} />
  ) : null;
}
