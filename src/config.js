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
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Ski', image: require('../assets/ski.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Pokal', image: require('../assets/trophy.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Tiger', image: require('../assets/tiger.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Berge', image: require('../assets/mountains.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Brille', image: require('../assets/glasses.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Hut', image: require('../assets/hat.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Uhr', image: require('../assets/clock.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Gurke', image: require('../assets/cucumber.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Velo', image: require('../assets/bicycle.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Fisch', image: require('../assets/fish.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Hai', image: require('../assets/shark.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Bus', image: require('../assets/bus.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Mond', image: require('../assets/moon.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Kran', image: require('../assets/crane.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Tomate', image: require('../assets/tomato.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Polizei', image: require('../assets/cop.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Titanic', image: require('../assets/titanic.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Lego', image: require('../assets/lego.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Ronaldo', image: require('../assets/ronaldo.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Messi', image: require('../assets/messi.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Zug', image: require('../assets/train.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Rakete', image: require('../assets/rocket.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Maus', image: require('../assets/mouse.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Globi', image: require('../assets/globi.jpeg'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Ballon', image: require('../assets/balloon.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Federer', image: require('../assets/federer.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Käse', image: require('../assets/cheese.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Boot', image: require('../assets/boat.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Medalie', image: require('../assets/medal.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Eis', image: require('../assets/icecream.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Hose', image: require('../assets/pants.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Pflanze', image: require('../assets/plant.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Maske', image: require('../assets/mask.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Messer', image: require('../assets/knife.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Löffel', image: require('../assets/spoon.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Augen', image: require('../assets/eyes.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Rad', image: require('../assets/wheel.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Sofa', image: require('../assets/sofa.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Laptop', image: require('../assets/laptop.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Radio', image: require('../assets/radio.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Garten', image: require('../assets/garten.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Stern', image: require('../assets/stern.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Stuhl', image: require('../assets/stuhl.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Vogel', image: require('../assets/vogel.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Blume', image: require('../assets/blume.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Fabrik', image: require('../assets/Fabrik.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Bagger', image: require('../assets/Bagger.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Roboter', image: require('../assets/Roboter.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Dino', image: require('../assets/Dino.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Fuss', image: require('../assets/Fuss.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Igel', image: require('../assets/Igel.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Kissen', image: require('../assets/Kissen.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Blatt', image: require('../assets/Blatt.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Pferd', image: require('../assets/Pferd.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Kuh', image: require('../assets/Kuh.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Socken', image: require('../assets/Socken.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Vase', image: require('../assets/Vase.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Hand', image: require('../assets/Hand.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Koch', image: require('../assets/Koch.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  // {
  //   sentence: 'Grapes are fruits',
  //   words: [{ word: 'Birne', image: require('../assets/Birne.png'), }/*, { word: 'fruits', image: '', }*/],
  // },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Helm', image: require('../assets/Helm.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Spinne', image: require('../assets/Spinne.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Panda', image: require('../assets/Panda.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Rampe', image: require('../assets/Rampe.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Delfin', image: require('../assets/Delfin.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Planet', image: require('../assets/Planet.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Geld', image: require('../assets/Geld.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Töff', image: require('../assets/Toeff.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Pommes', image: require('../assets/Pommes.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Karotte', image: require('../assets/Karotte.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Ninjago', image: require('../assets/Ninjago.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Taxi', image: require('../assets/Taxi.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Fussball', image: require('../assets/Fussball.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Backflip', image: require('../assets/Backflip.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Nuss', image: require('../assets/Nuss.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Zoo', image: require('../assets/Zoo.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Arzt', image: require('../assets/Arzt.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Ärztin', image: require('../assets/Aerztin.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Rennen', image: require('../assets/Rennen.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Keller', image: require('../assets/Keller.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Schwein', image: require('../assets/Schwein.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Star Wars', image: require('../assets/Star_Wars.png'), }/*, { word: 'fruits', image: '', }*/],
  },
  {
    sentence: 'Grapes are fruits',
    words: [{ word: 'Gravitrax', image: require('../assets/Gravitrax.png'), }/*, { word: 'fruits', image: '', }*/],
  },
];

export default CONFIG;
