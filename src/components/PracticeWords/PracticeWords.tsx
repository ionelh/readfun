import { useState, useEffect, useMemo } from 'react';
import PracticeWord from '../../PracticeWord';
import AnswerQuestion from '../../AnswerQuestion';
import AudioQuestion from '../../AudioQuestion';
import { getRandom, removeIndex } from '../../utils';
import CONFIG, { WordItem, QuestionItem, Config } from '../../config';

type ConfigIndexGetter = () => number;

const getNewIndex = (CONFIG: Config): ConfigIndexGetter => {
  let availableIndices: number[] = CONFIG.map((value, index) => index);
  let index: number = 0;
  return () => {
    const newIndex: number = getRandom(0, availableIndices.length);
    index = newIndex;
    const result: number = availableIndices[index];
    availableIndices = removeIndex(availableIndices, index);
    return result;
  };
};

const newConfigIndexGetter: ConfigIndexGetter = getNewIndex(CONFIG);

export default function PracticeWords() {
  const [crtConfigIndex, setCrtConfigIndex] = useState<number | null>(null);

  useEffect(() => {
    setCrtConfigIndex(newConfigIndexGetter());
  }, []);

  const word: string = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!(CONFIG[crtConfigIndex] as WordItem)?.word) return;
    return (CONFIG[crtConfigIndex] as WordItem).word;
  }, [crtConfigIndex]);

  const wordArr: string[] = useMemo(() => {
    if (!word) return;
    return word.split('');
  }, [word]);

  const image = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!(CONFIG[crtConfigIndex] as WordItem).image) return;
    return (CONFIG[crtConfigIndex] as WordItem).image;
  }, [crtConfigIndex]);

  const syllables: string[] = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!(CONFIG[crtConfigIndex] as WordItem).syllables) return;
    return (CONFIG[crtConfigIndex] as WordItem).syllables;
  }, [crtConfigIndex]);

  const imageAnswers: any[] = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!(CONFIG[crtConfigIndex] as QuestionItem).imageAnswers) return;
    return (CONFIG[crtConfigIndex] as QuestionItem).imageAnswers.images;
  }, [crtConfigIndex]);

  const correctAnswerIndexes: number[] = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!(CONFIG[crtConfigIndex] as QuestionItem).imageAnswers) return;
    return (CONFIG[crtConfigIndex] as QuestionItem).imageAnswers.correct;
  }, [crtConfigIndex]);

  const question: string = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!(CONFIG[crtConfigIndex] as QuestionItem).question) return;
    return (CONFIG[crtConfigIndex] as QuestionItem).question;
  }, [crtConfigIndex]);

  const audio: any = useMemo(() => {
    if (crtConfigIndex === null) return;
    if (!(CONFIG[crtConfigIndex] as QuestionItem).audio) return;
    return (CONFIG[crtConfigIndex] as QuestionItem).audio;
  }, [crtConfigIndex]);

  const handleNext = () => {
    setCrtConfigIndex(newConfigIndexGetter());
  };

  if (crtConfigIndex === null) {
    return null;
  } else if ((CONFIG[crtConfigIndex] as WordItem).word) {
    return (
      <PracticeWord
        substrings={syllables || wordArr}
        word={word}
        image={image}
        completeHandler={handleNext}
      />
    );
  } else if ((CONFIG[crtConfigIndex] as QuestionItem).question) {
    return (
      <AnswerQuestion
        imageAnswers={imageAnswers}
        question={question}
        correctAnswerIndexes={correctAnswerIndexes}
        handleNext={handleNext}
      />
    );
  } else if ((CONFIG[crtConfigIndex] as QuestionItem).audio) {
    return (
      <AudioQuestion
        imageAnswers={imageAnswers}
        audio={audio}
        correctAnswerIndexes={correctAnswerIndexes}
        handleNext={handleNext}
      />
    );
  }
}
