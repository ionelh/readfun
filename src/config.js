const CONFIG = [
    // { word: 'Gravitrax', image: require('../assets/Gravitrax.png') },
    // { word: 'Trauben', image: require('../assets/grapes.png') },
    // { word: 'Kiwi', image: require('../assets/kiwi.png'), syllables: ['Ki', 'wi'] },
    // { word: 'Wassermelone', image: require('../assets/watermelon.png'), syllables: ['Wa', 'sser', 'me', 'lo', 'ne'] },
    // { word: 'Baum', image: require('../assets/tree.png') },
    // { word: 'Torte', image: require('../assets/cake.png') },
    // { word: 'Haus', image: require('../assets/house.png') },
    // { word: 'Katze', image: require('../assets/cat.png') },
    // { word: 'Hund', image: require('../assets/dog.png') },
    // { word: 'Sonic', image: require('../assets/sonic.png') },
    // { word: 'Mario', image: require('../assets/mario.png') },
    // { word: 'Sonne', image: require('../assets/sun.png') },
    // { word: 'Wasser', image: require('../assets/water.png') },
    // { word: 'Ball', image: require('../assets/ball.png') },
    // { word: 'Schlüssel', image: require('../assets/key.png') },
    // { word: 'Pikachu', image: require('../assets/pikachu.png'), syllables: ['Pi', 'ka', 'chu'] },
    // { word: 'Löwe', image: require('../assets/lion.png'), syllables: ['Lö', 'we'] },
    // { word: 'Buch', image: require('../assets/book.png') },
    // { word: 'Tasse', image: require('../assets/cup.png') },
    // { word: 'Gabel', image: require('../assets/fork.png'), syllables: ['Ga', 'bel'] },
    // { word: 'Bett', image: require('../assets/Bett.png') },
    // { word: 'Tür', image: require('../assets/door.png') },
    // { word: 'Tisch', image: require('../assets/table.png') },
    // { word: 'Pedale', image: require('../assets/Pedale.png'), syllables: ['Pe', 'da', 'le'] },
    // { word: 'Teller', image: require('../assets/plate.png') },
    // { word: 'Wurst', image: require('../assets/sausage.png') },
    // { word: 'Pizza', image: require('../assets/pizza.png'), syllables: ['Pi', 'zza'] },
    // { word: 'Videospiel', image: require('../assets/videogame.png'), syllables: ['Vi', 'deo', 'spiel'] },
    // { word: 'Herz', image: require('../assets/heart.png') },
    // { word: 'Bär', image: require('../assets/bear.png') },
    // { word: 'Wal', image: require('../assets/whale.png') },
    // { word: 'Nase', image: require('../assets/nose.png'), syllables: ['Na', 'se'] },
    // { word: 'Ski', image: require('../assets/ski.png') },
    // { word: 'Pokal', image: require('../assets/trophy.png') },
    // { word: 'Tiger', image: require('../assets/tiger.png') },
    // { word: 'Berge', image: require('../assets/mountains.png') },
    // { word: 'Brille', image: require('../assets/glasses.png'), syllables: ['Bri', 'lle'] },
    // { word: 'Hut', image: require('../assets/hat.png') },
    // { word: 'Uhr', image: require('../assets/clock.png') },
    // { word: 'Gurke', image: require('../assets/cucumber.png'), syllables: ['Gur', 'ke'] },
    // { word: 'Velo', image: require('../assets/bicycle.png') },
    // { word: 'Fisch', image: require('../assets/fish.png') },
    // { word: 'Hai', image: require('../assets/shark.png') },
    // { word: 'Bus', image: require('../assets/bus.png') },
    // { word: 'Mond', image: require('../assets/moon.png') },
    // { word: 'Kran', image: require('../assets/crane.png') },
    // { word: 'Polizei', image: require('../assets/cop.png') },
    // { word: 'Titanic', image: require('../assets/titanic.png'), syllables: ['Ti', 'ta', 'nic'] },
    // { word: 'Lego', image: require('../assets/lego.png') },
    // { word: 'Ronaldo', image: require('../assets/ronaldo.png'), syllables: ['Ro', 'nal', 'do'] },
    // { word: 'Messi', image: require('../assets/messi.png') },
    // { word: 'Zug', image: require('../assets/train.png') },
    // { word: 'Rakete', image: require('../assets/rocket.png'), syllables: ['Ra', 'ke', 'te'] },
    // { word: 'Globi', image: require('../assets/Globi.png') },
    // { word: 'Federer', image: require('../assets/federer.png'), syllables: ['Fe', 'de', 'rer'] },
    // { word: 'Käse', image: require('../assets/cheese.png') },
    // { word: 'Boot', image: require('../assets/boat.png') },
    // { word: 'Medalie', image: require('../assets/medal.png') },
    // { word: 'Eis', image: require('../assets/icecream.png') },
    // { word: 'Hose', image: require('../assets/pants.png') },
    // { word: 'Pflanze', image: require('../assets/plant.png') },
    // { word: 'Maske', image: require('../assets/mask.png') },
    // { word: 'Messer', image: require('../assets/knife.png') },
    // { word: 'Löffel', image: require('../assets/spoon.png') },
    // { word: 'Rad', image: require('../assets/wheel.png') },
    // { word: 'Sofa', image: require('../assets/sofa.png') },
    // { word: 'Laptop', image: require('../assets/laptop.png') },
    // { word: 'Radio', image: require('../assets/radio.png') },
    // { word: 'Garten', image: require('../assets/Garten.png') },
    // { word: 'Stern', image: require('../assets/Stern.png') },
    // { word: 'Stuhl', image: require('../assets/stuhl.png') },
    // { word: 'Blume', image: require('../assets/blume.png') },
    // { word: 'Fabrik', image: require('../assets/Fabrik.png') },
    // { word: 'Bagger', image: require('../assets/Bagger.png') },
    // { word: 'Roboter', image: require('../assets/Roboter.png') },
    // { word: 'Dino', image: require('../assets/Dino.png') },
    // { word: 'Fuss', image: require('../assets/Fuss.png') },
    // { word: 'Kissen', image: require('../assets/Kissen.png') },
    // { word: 'Blatt', image: require('../assets/Blatt.png') },
    // { word: 'Pferd', image: require('../assets/Pferd.png') },
    // { word: 'Kuh', image: require('../assets/Kuh.png') },
    // { word: 'Socken', image: require('../assets/Socken.png') },
    // { word: 'Vase', image: require('../assets/Vase.png') },
    // { word: 'Hand', image: require('../assets/Hand.png') },
    // { word: 'Koch', image: require('../assets/Koch.png') },
    // { word: 'Birne', image: require('../assets/Birne.png') },
    // { word: 'Helm', image: require('../assets/Helm.png') },
    // { word: 'Spinne', image: require('../assets/Spinne.png') },
    // { word: 'Panda', image: require('../assets/Panda.png') },
    // { word: 'Rampe', image: require('../assets/Rampe.png') },
    // { word: 'Delfin', image: require('../assets/Delfin.png') },
    // { word: 'Planet', image: require('../assets/Planet.png') },
    // { word: 'Geld', image: require('../assets/Geld.png') },
    // { word: 'Töff', image: require('../assets/Toeff.png') },
    // { word: 'Pommes', image: require('../assets/Pommes.png') },
    // { word: 'Karotte', image: require('../assets/Karotte.png'), syllables: ['Ka', 'ro', 'tte'] },
    // { word: 'Ninjago', image: require('../assets/Ninjago.png'), syllables: ['Nin', 'ja', 'go'] },
    // { word: 'Taxi', image: require('../assets/Taxi.png') },
    // { word: 'Fussball', image: require('../assets/Fussball.png') },
    // { word: 'Backflip', image: require('../assets/Backflip.png') },
    // { word: 'Nuss', image: require('../assets/Nuss.png') },
    // { word: 'Zoo', image: require('../assets/Zoo.png') },
    // { word: 'Rennen', image: require('../assets/Rennen.png') },
    // { word: 'Keller', image: require('../assets/Keller.png') },
    // { word: 'Schwein', image: require('../assets/Schwein.png') },
    // { word: 'Star Wars', image: require('../assets/Star_Wars.png') },
    // { word: 'Krokodil', image: require('../assets/krokodil.png'), syllables: ['Kro', 'ko', 'dil'] },
    // { word: 'Schnecke', image: require('../assets/Schnecke.png') },
    // { word: 'Glurak', image: require('../assets/Glurak.png') },
    // { word: 'Mew Two', image: require('../assets/Mew_Two.png') },
    // { word: 'Mew', image: require('../assets/Mew.png') },
    // { word: 'Turtok', image: require('../assets/Turtok.png') },
    // { word: 'Harry Potter', image: require('../assets/Harry_Potter.png') },
    // { word: 'Draco', image: require('../assets/Draco.png') },
    // { word: 'Voldemort', image: require('../assets/Voldemort.png'), syllables: ['Vol', 'de', 'mort'] },
    // { word: 'Justus', image: require('../assets/Justus.png') },
    // { word: 'Peter', image: require('../assets/Peter.png') },
    // { word: 'Bob', image: require('../assets/Bob.png') },
    // { word: 'Minion', image: require('../assets/Minion.png'), syllables: ['Mi', 'ni', 'on'] },
    // { word: 'Murmli', image: require('../assets/Murmli.png') },
    // { word: 'Schatz', image: require('../assets/Schatz.png') },
    // { word: 'Flugzeug', image: require('../assets/Flugzeug.png'), syllables: ['Flug', 'zeug'] },
    // { word: 'Kartoffel', image: require('../assets/Kartoffel.png'), syllables: ['Kar', 'to', 'ffel'] },
    // { word: 'Finger', image: require('../assets/Finger.png'), syllables: ['Fin', 'ger'] },
    // { word: 'Helicopter', image: require('../assets/Helicopter.png'), syllables: ['He', 'li', 'cop', 'ter'] },



    // School words
    /******************************* A *********************************/
    { word: 'Alien', image: require('../assets/Alien.png'), syllables: ['Ali', 'en'] },
    {
      question: 'Alien',
      imageAnswers: {
        images: [require('../assets/Harry_Potter.png'), require('../assets/cop.png'), require('../assets/Alien.png'), require('../assets/Minion.png')],
        correct: [2],
      },
    },
    { word: 'Ärztin', image: require('../assets/Aerztin.png'), syllables: ['Ärz', 'tin'] },
    {
      question: 'Ärztin',
      imageAnswers: {
        images: [require('../assets/Arzt.png'), require('../assets/cop.png'), require('../assets/Koch.png'), require('../assets/Aerztin.png')],
        correct: [3],
      },
    },
    { word: 'Arzt', image: require('../assets/Arzt.png') },
    {
      question: 'Arzt',
      imageAnswers: {
        images: [require('../assets/Arzt.png'), require('../assets/cop.png'), require('../assets/Koch.png'), require('../assets/Aerztin.png')],
        correct: [0],
      },
    },
    { word: 'Augen', image: require('../assets/Augen.png'), syllables: ['Au', 'gen'] },
    {
      question: 'Augen',
      imageAnswers: {
        images: [
          require('../assets/Hand.png'),
          require('../assets/Augen.png'),
          require('../assets/pants.png'),
          require('../assets/Finger.png'),
        ],
        correct: [1],
      },
    },
    { word: 'Auto', image: require('../assets/car.png'), syllables: ['Au', 'to'] },
    {
      question: 'Auto',
      imageAnswers: {
        images: [
          require('../assets/car.png'),
          require('../assets/blume.png'),
          require('../assets/house.png'),
          require('../assets/Rampe.png'),
        ],
        correct: [0],
      },
    },
    { word: 'Ameise', image: require('../assets/Ameise.png'), syllables: ['Amei', 'se'] },
    {
      question: 'Ameise',
      imageAnswers: {
        images: [
          require('../assets/Ente.png'),
          require('../assets/Ameise.png'),
          require('../assets/Maus.png'),
          require('../assets/Affe.png'),
        ],
        correct: [1],
      },
    },
    { word: 'Affe', image: require('../assets/Affe.png') },
    {
      question: 'Affe',
      imageAnswers: {
        images: [
          require('../assets/Ente.png'),
          require('../assets/Ameise.png'),
          require('../assets/Maus.png'),
          require('../assets/Affe.png'),
        ],
        correct: [3],
      },
    },
    { word: 'Ananas', image: require('../assets/Ananas.png'), syllables: ['Ana', 'nas'] },
    {
      question: 'Ananas',
      imageAnswers: {
        images: [
          require('../assets/Mango.png'),
          require('../assets/Apfel.png'),
          require('../assets/Ananas.png'),
          require('../assets/Banane.png'),
        ],
        correct: [2],
      },
    },
    { word: 'Apfel', image: require('../assets/Apfel.png'), syllables: ['Ap', 'fel'] },
    {
      question: 'Apfel',
      imageAnswers: {
        images: [
          require('../assets/Apfel.png'),
          require('../assets/Banane.png'),
          require('../assets/Kartoffel.png'),
          require('../assets/Mango.png'),
        ],
        correct: [0],
      },
    },
    /******************************* B *********************************/
    { word: 'Brot', image: require('../assets/Brot.png') },
    { word: 'Banane', image: require('../assets/Banane.png'), syllables: ['Ba', 'na', 'ne'] },
    {
      question: 'Banane',
      imageAnswers: {
        images: [
          require('../assets/Apfel.png'),
          require('../assets/Kartoffel.png'),
          require('../assets/Banane.png'),
          require('../assets/Mango.png'),
        ],
        correct: [2],
      },
    },
    { word: 'Biene', image: require('../assets/Biene.png'), syllables: ['Bie', 'ne'] },
    /******************************* B *********************************/
    { word: 'Dossier', image: require('../assets/Dossier.png'), syllables: ['Dos', 'si', 'er']},
    {
      question: 'Dossier',
      imageAnswers: {
        images: [
          require('../assets/Koffer.png'),
          require('../assets/Mantel.png'),
          require('../assets/Lampe.png'),
          require('../assets/Dossier.png'),
        ],
        correct: [3],
      },
    },
    /******************************* B *********************************/
    { word: 'Camion', image: require('../assets/Camion.png'), syllables: ['Ca', 'mi', 'on']},
    {
      question: 'Camion',
      imageAnswers: {
        images: [
          require('../assets/wheel.png'),
          require('../assets/Toeff.png'),
          require('../assets/Camion.png'),
          require('../assets/car.png'),
        ],
        correct: [2],
      },
    },
    /******************************* E *********************************/
    { word: 'Ente', image: require('../assets/Ente.png'), syllables: ['En', 'te'] },
    {
      question: 'Ente',
      imageAnswers: {
        images: [
          require('../assets/Ente.png'),
          require('../assets/Biene.png'),
          require('../assets/Affe.png'),
          require('../assets/Maus.png'),
        ],
        correct: [0],
      },
    },
    { word: 'Esel', image: require('../assets/Esel.png') },
    {
      question: 'Esel',
      imageAnswers: {
        images: [
          require('../assets/Biene.png'),
          require('../assets/Esel.png'),
          require('../assets/Maus.png'),
          require('../assets/Ente.png'),
        ],
        correct: [1],
      },
    },
    { word: 'Etui', image: require('../assets/Etui.png') },
    /******************************* H *********************************/
    { word: 'Hase', image: require('../assets/Hase.png'), syllables: ['Ha', 'se'] },
    {
      question: 'Hase',
      imageAnswers: {
        images: [
          require('../assets/Ente.png'),
          require('../assets/Biene.png'),
          require('../assets/Hase.png'),
          require('../assets/Esel.png'),
        ],
        correct: [2],
      },
    },
    /******************************* I *********************************/
    { word: 'Insel', image: require('../assets/Insel.png'), syllables: ['In', 'sel'] },
    {
      question: 'Insel',
      imageAnswers: {
        images: [
          require('../assets/Mango.png'),
          require('../assets/Insel.png'),
          require('../assets/Kartoffel.png'),
          require('../assets/Garten.png'),
        ],
        correct: [1],
      },
    },
    { word: 'Igel', image: require('../assets/Igel.png') },
    {
      question: 'Igel',
      imageAnswers: {
        images: [
          require('../assets/lion.png'),
          require('../assets/Hase.png'),
          require('../assets/Panda.png'),
          require('../assets/Igel.png'),
        ],
        correct: [3],
      },
    },
    /******************************* L *********************************/
    { word: 'Labyrinth', image: require('../assets/Labyrinth.png'), syllables: ['La', 'by', 'rinth'] },
    { word: 'Lupe', image: require('../assets/Lupe.png'), syllables: ['Lu', 'pe'] },
    {
      question: 'Lupe',
      imageAnswers: {
        images: [
          require('../assets/fork.png'),
          require('../assets/Ordner.png'),
          require('../assets/Lupe.png'),
          require('../assets/Lampe.png'),
        ],
        correct: [2],
      },
    },
    { word: 'Lampe', image: require('../assets/Lampe.png'), syllables: ['Lam', 'pe'] },
    {
      question: 'Lampe',
      imageAnswers: {
        images: [
          require('../assets/plate.png'),
          require('../assets/trophy.png'),
          require('../assets/fork.png'),
          require('../assets/Lampe.png'),
        ],
        correct: [3],
      },
    },
    { word: 'Luftballons', image: require('../assets/Luftballons.png'), syllables: ['Luft', 'bal', 'lons'] },
    {
      question: 'Luftballons',
      imageAnswers: {
        images: [
          require('../assets/mask.png'),
          require('../assets/Rose.png'),
          require('../assets/Vase.png'),
          require('../assets/Luftballons.png'),
        ],
        correct: [3],
      },
    },
    { word: 'Koffer', image: require('../assets/Koffer.png'), syllables: ['Kof', 'fer'] },
    /******************************* M *********************************/
    { word: 'Mais', image: require('../assets/Mais.png') },
    {
      question: 'Mais',
      imageAnswers: {
        images: [
          require('../assets/Salami.png'),
          require('../assets/Mais.png'),
          require('../assets/pizza.png'),
          require('../assets/Mango.png'),
        ],
        correct: [1],
      },
    },
    { word: 'Maus', image: require('../assets/Maus.png') },
    {
      question: 'Maus',
      imageAnswers: {
        images: [
          require('../assets/Esel.png'),
          require('../assets/Biene.png'),
          require('../assets/Ente.png'),
          require('../assets/Maus.png'),
        ],
        correct: [3],
      },
    },
    { word: 'Melone', image: require('../assets/Melone.png'), syllables: ['Me', 'lo', 'ne'] },
    {
      question: 'Melone',
      imageAnswers: {
        images: [
          require('../assets/Mango.png'),
          require('../assets/Apfel.png'),
          require('../assets/Melone.png'),
          require('../assets/Banane.png'),
        ],
        correct: [2],
      },
    },
    { word: 'Mango', image: require('../assets/Mango.png'), syllables: ['Man', 'go'] },
    {
      question: 'Mango',
      imageAnswers: {
        images: [
          require('../assets/Mango.png'),
          require('../assets/Apfel.png'),
          require('../assets/Melone.png'),
          require('../assets/Banane.png'),
        ],
        correct: [0],
      },
    },
    { word: 'Mantel', image: require('../assets/Mantel.png'), syllables: ['Man', 'tel'] },
    {
      question: 'Mantel',
      imageAnswers: {
        images: [
          require('../assets/pants.png'),
          require('../assets/Mantel.png'),
          require('../assets/Kissen.png'),
          require('../assets/Socken.png'),
        ],
        correct: [1],
      },
    },
    /******************************* N *********************************/
    { word: 'Nagel', image: require('../assets/Nagel.png'), syllables: ['Na', 'gel']},
    {
      question: 'Nagel',
      imageAnswers: {
        images: [
          require('../assets/Nagel.png'),
          require('../assets/plate.png'),
          require('../assets/spoon.png'),
          require('../assets/Stern.png'),
        ],
        correct: [0],
      },
    },
    /******************************* O *********************************/
    { word: 'Ofen', image: require('../assets/Ofen.png') },
    { word: 'Ordner', image: require('../assets/Ordner.png'), syllables: ['Ord', 'ner'] },
    /******************************* R *********************************/
    { word: 'Rose', image: require('../assets/Rose.png'), syllables: ['Ro', 'se'] },
    /******************************* S *********************************/
    { word: 'Salat', image: require('../assets/Salat.png'), syllables: ['Sa', 'lat'] },
    {
      question: 'Salat',
      imageAnswers: {
        images: [
          require('../assets/Salat.png'),
          require('../assets/Salami.png'),
          require('../assets/Pommes.png'),
          require('../assets/Brot.png'),
        ],
        correct: [0],
      },
    },
    { word: 'Sandalen', image: require('../assets/Sandalen.png'), syllables: ['San', 'da', 'len'] },
    {
      question: 'Sandalen',
      imageAnswers: {
        images: [
          require('../assets/Sandalen.png'),
          require('../assets/pants.png'),
          require('../assets/Mantel.png'),
          require('../assets/hat.png'),
        ],
        correct: [0],
      },
    },
    { word: 'Salami', image: require('../assets/Salami.png'), syllables: ['Sa', 'la', 'mi'] },
    {
      question: 'Salami',
      imageAnswers: {
        images: [
          require('../assets/pizza.png'),
          require('../assets/Salami.png'),
          require('../assets/Mango.png'),
          require('../assets/Mais.png'),
        ],
        correct: [1],
      },
    },
    /******************************* T *********************************/
    { word: 'Tomate', image: require('../assets/tomato.png'), syllables: ['To', 'ma', 'te'] },
    /******************************* V *********************************/
    { word: 'Vogel', image: require('../assets/Vogel.png') },
    {
      question: 'Vogel',
      imageAnswers: {
        images: [require('../assets/bear.png'), require('../assets/tiger.png'), require('../assets/Vogel.png'), require('../assets/krokodil.png')],
        correct: [2],
      },
    },

  /******************** CHOOSE OPTION ****************************/


  // {
  //   question: 'Wer ist der beste?',
  //   imageAnswers: {
  //     images: [require('../assets/messi.png'), require('../assets/haaland.png'), require('../assets/mbappe.png'), require('../assets/ronaldo.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Wer schwimmt besser?',
  //   imageAnswers: {
  //     images: [require('../assets/dog.png'), require('../assets/lion.png'), require('../assets/Igel.png'), require('../assets/shark.png')],
  //     correct: [3],
  //   },
  // },
  // {
  //   question: 'Wer spielt Tennis?',
  //   imageAnswers: {
  //     images: [require('../assets/ronaldo.png'), require('../assets/federer.png'), require('../assets/messi.png'), require('../assets/mbappe.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Wer spielt Fussball?',
  //   imageAnswers: {
  //     images: [require('../assets/ronaldo.png'), require('../assets/federer.png'), require('../assets/messi.png'), require('../assets/mbappe.png')],
  //     correct: [0,2,3],
  //   },
  // },
  // {
  //   question: 'Wer ist der Koch?',
  //   imageAnswers: {
  //     images: [require('../assets/Arzt.png'), require('../assets/cop.png'), require('../assets/Koch.png'), require('../assets/Aerztin.png')],
  //     correct: [2],
  //   },
  // },
  // {
  //   question: 'Wer ist der Polizist?',
  //   imageAnswers: {
  //     images: [require('../assets/Arzt.png'), require('../assets/cop.png'), require('../assets/Koch.png'), require('../assets/Aerztin.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Wer ist schneller?',
  //   imageAnswers: {
  //     images: [require('../assets/Schnecke.png'), require('../assets/Toeff.png'), require('../assets/Panda.png'), require('../assets/Igel.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Wer ist langsamer?',
  //   imageAnswers: {
  //     images: [require('../assets/Schnecke.png'), require('../assets/Toeff.png'), require('../assets/Panda.png'), require('../assets/Igel.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Welches ist süss?',
  //   imageAnswers: {
  //     images: [require('../assets/Pommes.png'), require('../assets/cucumber.png'), require('../assets/Brot.png'), require('../assets/Apfel.png')],
  //     correct: [3],
  //   },
  // },
  // {
  //   question: 'Welches ist die Sonne?',
  //   imageAnswers: {
  //     images: [require('../assets/sun.png'), require('../assets/Planet.png'), require('../assets/moon.png'), require('../assets/Stern.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Welcher ist der Planet?',
  //   imageAnswers: {
  //     images: [require('../assets/sun.png'), require('../assets/Planet.png'), require('../assets/moon.png'), require('../assets/Stern.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Welches ist der Mond?',
  //   imageAnswers: {
  //     images: [require('../assets/sun.png'), require('../assets/Planet.png'), require('../assets/moon.png'), require('../assets/Stern.png')],
  //     correct: [2],
  //   },
  // },
  // {
  //   question: 'Welcher ist der Stern?',
  //   imageAnswers: {
  //     images: [require('../assets/sun.png'), require('../assets/Planet.png'), require('../assets/moon.png'), require('../assets/Stern.png')],
  //     correct: [3],
  //   },
  // },
  // {
  //   question: 'Wer gibt Milch?',
  //   imageAnswers: {
  //     images: [require('../assets/cat.png'), require('../assets/Kuh.png'), require('../assets/monkey.png'), require('../assets/dog.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Wer ist Pikachus Trainer?',
  //   imageAnswers: {
  //     images: [require('../assets/Serena.png'), require('../assets/Leaf.png'), require('../assets/Red.png'), require('../assets/Ash.png')],
  //     correct: [3],
  //   },
  // },
  // {
  //   question: 'Welches ist Globi?',
  //   imageAnswers: {
  //     images: [require('../assets/Globi.png'), require('../assets/pikachu.png'), require('../assets/mario.png'), require('../assets/sonic.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Welches ist Pikachu?',
  //   imageAnswers: {
  //     images: [require('../assets/mario.png'), require('../assets/sonic.png'), require('../assets/pikachu.png'), require('../assets/Globi.png')],
  //     correct: [2],
  //   },
  // },
  // {
  //   question: 'Welcher ist Sonic?',
  //   imageAnswers: {
  //     images: [require('../assets/mario.png'), require('../assets/sonic.png'), require('../assets/Globi.png'), require('../assets/pikachu.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Welches ist Mario?',
  //   imageAnswers: {
  //     images: [require('../assets/sonic.png'), require('../assets/Globi.png'), require('../assets/pikachu.png'), require('../assets/mario.png')],
  //     correct: [3],
  //   },
  // },
  // {
  //   question: 'Welcher ist Harry Potter?',
  //   imageAnswers: {
  //     images: [require('../assets/Draco.png'), require('../assets/Harry_Potter.png'), require('../assets/Voldemort.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Welcher ist Draco?',
  //   imageAnswers: {
  //     images: [require('../assets/Draco.png'), require('../assets/Harry_Potter.png'), require('../assets/Voldemort.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Welcher ist Voldemort?',
  //   imageAnswers: {
  //     images: [require('../assets/Voldemort.png'), require('../assets/Draco.png'), require('../assets/Harry_Potter.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Welcher ist Räuber Hotzenplotz?',
  //   imageAnswers: {
  //     images: [require('../assets/Harry_Potter.png'), require('../assets/Hotzenplotz.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Welcher ist Peter?',
  //   imageAnswers: {
  //     images: [require('../assets/Justus.png'), require('../assets/Peter.png'), require('../assets/Bob.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Welcher ist Justus?',
  //   imageAnswers: {
  //     images: [require('../assets/Justus.png'), require('../assets/Bob.png'), require('../assets/Peter.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Welcher ist Bob?',
  //   imageAnswers: {
  //     images: [require('../assets/Bob.png'), require('../assets/Peter.png'), require('../assets/Justus.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Wer hat blonde Haare??',
  //   imageAnswers: {
  //     images: [require('../assets/Peter.png'), require('../assets/Bob.png'), require('../assets/Justus.png')],
  //     correct: [1],
  //   },
  // },
];

export default CONFIG;
