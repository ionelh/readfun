import { useState, useEffect, useMemo } from 'react';
import PracticeWord from './PracticeWord';
import { getRandom, removeIndex } from './utils';

const CONFIG = [
  {
    sentence: 'Apple is a fruit',
    words: [{ word: 'Apfel', image: require('../assets/apple.png'), }/*, { word: 'fruit', image: '', }*/],
  },
  {
    sentence: 'Banana is a fruit',
    words: [{ word: 'Banane', image: require('../assets/banana.png'), }/*, { word: 'fruit', image: '', }*/],
  },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Trauben', image: require('../assets/grapes.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Kiwi', image: require('../assets/kiwi.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Wassermelone', image: require('../assets/watermelon.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Baum', image: require('../assets/tree.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Torte', image: require('../assets/cake.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Haus', image: require('../assets/house.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Katze', image: require('../assets/cat.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Hund', image: require('../assets/dog.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Sonic', image: require('../assets/sonic.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Mario', image: require('../assets/mario.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Sonne', image: require('../assets/sun.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Wasser', image: require('../assets/water.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Ball', image: require('../assets/ball.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Schlüssel', image: require('../assets/key.png'), }/*, { word: 'fruits', image: '', }*/],
  // }
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Pikachu', image: require('../assets/pikachu.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Auto', image: require('../assets/car.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Löwe', image: require('../assets/lion.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Buch', image: require('../assets/book.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Tasse', image: require('../assets/cup.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Gabel', image: require('../assets/fork.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Bett', image: require('../assets/bed.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Tür', image: require('../assets/door.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Tisch', image: require('../assets/table.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Pedale', image: require('../assets/pedals.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Affe', image: require('../assets/monkey.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Brot', image: require('../assets/bread.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Teller', image: require('../assets/plate.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Wurst', image: require('../assets/sausage.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Pizza', image: require('../assets/pizza.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Videospiel', image: require('../assets/videogame.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Herz', image: require('../assets/heart.png'), }/*, { word: 'fruits', image: '', }*/],
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
  ) : null;
}
