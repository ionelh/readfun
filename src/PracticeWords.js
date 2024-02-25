import { useState, useEffect, useMemo } from 'react';
import PracticeWord from './PracticeWord';
import { getRandom, removeIndex } from './utils';

const CONFIG = [
  // {
  //   sentence: 'Apple is a fruit',
  //   words: [{ word: 'Apfel', image: require('../assets/apple.png'), }/*, { word: 'fruit', image: '', }*/],
  // },
  // {
  //   sentence: 'Banana is a fruit',
  //   words: [{ word: 'Banane', image: require('../assets/banana.png'), }/*, { word: 'fruit', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Trauben', image: require('../assets/grapes.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Kiwi', image: require('../assets/kiwi.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Wassermelone', image: require('../assets/watermelon.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Baum', image: require('../assets/tree.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Torte', image: require('../assets/cake.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Haus', image: require('../assets/house.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Katze', image: require('../assets/cat.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Hund', image: require('../assets/dog.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Sonic', image: require('../assets/sonic.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Mario', image: require('../assets/mario.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Sonne', image: require('../assets/sun.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Wasser', image: require('../assets/water.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Ball', image: require('../assets/ball.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Schlüssel', image: require('../assets/key.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Pikachu', image: require('../assets/pikachu.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Auto', image: require('../assets/car.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Löwe', image: require('../assets/lion.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Buch', image: require('../assets/book.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Tasse', image: require('../assets/cup.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Gabel', image: require('../assets/fork.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Bett', image: require('../assets/bed.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Tür', image: require('../assets/door.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Tisch', image: require('../assets/table.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Pedale', image: require('../assets/pedals.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Affe', image: require('../assets/monkey.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Brot', image: require('../assets/bread.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Teller', image: require('../assets/plate.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Wurst', image: require('../assets/sausage.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Pizza', image: require('../assets/pizza.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Videospiel', image: require('../assets/videogame.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Herz', image: require('../assets/heart.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Bär', image: require('../assets/bear.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Wal', image: require('../assets/whale.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Nase', image: require('../assets/nose.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Ski', image: require('../assets/ski.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Pokal', image: require('../assets/trophy.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Tiger', image: require('../assets/tiger.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Berge', image: require('../assets/mountains.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Brille', image: require('../assets/glasses.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Hut', image: require('../assets/hat.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Uhr', image: require('../assets/clock.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Gurke', image: require('../assets/cucumber.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Velo', image: require('../assets/bicycle.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Fisch', image: require('../assets/fish.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Hai', image: require('../assets/shark.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Bus', image: require('../assets/bus.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Mond', image: require('../assets/moon.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Kran', image: require('../assets/crane.png'), }/*, { word: 'fruits', image: '', }*/],
  },
];

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
