// src/config.types.ts

export type WordItem = {
  word: string;
  image: any; // Type from require()
  syllables?: string[];
};

type ImageAnswersConfig = {
  images: any[]; // Array of images from require()
  correct: number[];
};

export type QuestionItem = {
  question?: string;
  audio?: any;
  imageAnswers: ImageAnswersConfig;
};

type ConfigItem = WordItem | QuestionItem;

export type Config = ConfigItem[];

const CONFIG: Config = [
    // { word: 'Gravitrax', image: require('../assets/gravitrax.png') },
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
    // { word: 'Bett', image: require('../assets/bett.png') },
    // { word: 'Tür', image: require('../assets/door.png') },
    // { word: 'Tisch', image: require('../assets/table.png') },
    // { word: 'Pedale', image: require('../assets/pedale.png'), syllables: ['Pe', 'da', 'le'] },
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
    // { word: 'Globi', image: require('../assets/globi.png') },
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
    // { word: 'Garten', image: require('../assets/garten.png') },
    // { word: 'Stern', image: require('../assets/stern.png') },
    // { word: 'Stuhl', image: require('../assets/stuhl.png') },
    // { word: 'Blume', image: require('../assets/blume.png') },
    // { word: 'Fabrik', image: require('../assets/fabrik.png') },
    // { word: 'Bagger', image: require('../assets/bagger.png') },
    // { word: 'Roboter', image: require('../assets/roboter.png') },
    // { word: 'Dino', image: require('../assets/dino.png') },
    // { word: 'Fuss', image: require('../assets/fuss.png') },
    // { word: 'Kissen', image: require('../assets/kissen.png') },
    // { word: 'Blatt', image: require('../assets/blatt.png') },
    // { word: 'Pferd', image: require('../assets/pferd.png') },
    // { word: 'Kuh', image: require('../assets/kuh.png') },
    // { word: 'Socken', image: require('../assets/socken.png') },
    // { word: 'Vase', image: require('../assets/vase.png') },
    // { word: 'Hand', image: require('../assets/hand.png') },
    // { word: 'Koch', image: require('../assets/koch.png') },
    // { word: 'Birne', image: require('../assets/birne.png') },
    // { word: 'Helm', image: require('../assets/helm.png') },
    // { word: 'Spinne', image: require('../assets/spinne.png') },
    // { word: 'Panda', image: require('../assets/panda.png') },
    // { word: 'Rampe', image: require('../assets/rampe.png') },
    // { word: 'Delfin', image: require('../assets/delfin.png') },
    // { word: 'Planet', image: require('../assets/planet.png') },
    // { word: 'Geld', image: require('../assets/geld.png') },
    // { word: 'Töff', image: require('../assets/toeff.png') },
    // { word: 'Pommes', image: require('../assets/pommes.png') },
    // { word: 'Karotte', image: require('../assets/karotte.png'), syllables: ['Ka', 'ro', 'tte'] },
    // { word: 'Ninjago', image: require('../assets/ninjago.png'), syllables: ['Nin', 'ja', 'go'] },
    // { word: 'Taxi', image: require('../assets/taxi.png') },
    // { word: 'Fussball', image: require('../assets/fussball.png') },
    // { word: 'Backflip', image: require('../assets/backflip.png') },
    // { word: 'Nuss', image: require('../assets/nuss.png') },
    // { word: 'Zoo', image: require('../assets/zoo.png') },
    // { word: 'Rennen', image: require('../assets/rennen.png') },
    // { word: 'Keller', image: require('../assets/keller.png') },
    // { word: 'Schwein', image: require('../assets/schwein.png') },
    // { word: 'Star Wars', image: require('../assets/star_wars.png') },
    // { word: 'Krokodil', image: require('../assets/krokodil.png'), syllables: ['Kro', 'ko', 'dil'] },
    // { word: 'Schnecke', image: require('../assets/schnecke.png') },
    // { word: 'Glurak', image: require('../assets/glurak.png') },
    // { word: 'Mew Two', image: require('../assets/mew_two.png') },
    // { word: 'Mew', image: require('../assets/mew.png') },
    // { word: 'Turtok', image: require('../assets/turtok.png') },
    // { word: 'Harry Potter', image: require('../assets/harry_potter.png') },
    // { word: 'Draco', image: require('../assets/draco.png') },
    // { word: 'Voldemort', image: require('../assets/voldemort.png'), syllables: ['Vol', 'de', 'mort'] },
    // { word: 'Justus', image: require('../assets/justus.png') },
    // { word: 'Peter', image: require('../assets/peter.png') },
    // { word: 'Bob', image: require('../assets/bob.png') },
    // { word: 'Minion', image: require('../assets/minion.png'), syllables: ['Mi', 'ni', 'on'] },
    // { word: 'Murmli', image: require('../assets/murmli.png') },
    // { word: 'Schatz', image: require('../assets/schatz.png') },
    // { word: 'Flugzeug', image: require('../assets/flugzeug.png'), syllables: ['Flug', 'zeug'] },
    // { word: 'Kartoffel', image: require('../assets/kartoffel.png'), syllables: ['Kar', 'to', 'ffel'] },
    // { word: 'Finger', image: require('../assets/finger.png'), syllables: ['Fin', 'ger'] },
    // { word: 'Helicopter', image: require('../assets/helicopter.png'), syllables: ['He', 'li', 'cop', 'ter'] },
    // { word: 'Iglu', image: require('../assets/iglu.png'), syllables: ['Ig', 'lu'] },
    // { word: 'Zelt', image: require('../assets/zelt.png') },







    // School words
    /******************************* A *********************************/
  //   { word: 'Alien', image: require('../assets/alien.png'), syllables: ['Ali', 'en'] },
  //   {
  //     question: 'Alien',
  //     imageAnswers: {
  //       images: [require('../assets/harry_potter.png'), require('../assets/cop.png'), require('../assets/alien.png'), require('../assets/minion.png')],
  //       correct: [2],
  //     },
  //   },
  //   { word: 'Ärztin', image: require('../assets/aerztin.png'), syllables: ['Ärz', 'tin'] },
  //   {
  //     question: 'Ärztin',
  //     imageAnswers: {
  //       images: [require('../assets/arzt.png'), require('../assets/cop.png'), require('../assets/koch.png'), require('../assets/aerztin.png')],
  //       correct: [3],
  //     },
  //   },
  //   { word: 'Arzt', image: require('../assets/arzt.png') },
  //   {
  //     question: 'Arzt',
  //     imageAnswers: {
  //       images: [require('../assets/arzt.png'), require('../assets/cop.png'), require('../assets/koch.png'), require('../assets/aerztin.png')],
  //       correct: [0],
  //     },
  //   },
  //   { word: 'Augen', image: require('../assets/augen.png'), syllables: ['Au', 'gen'] },
  //   {
  //     question: 'Augen',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/hand.png'),
  //         require('../assets/augen.png'),
  //         require('../assets/pants.png'),
  //         require('../assets/finger.png'),
  //       ],
  //       correct: [1],
  //     },
  //   },
  //   { word: 'Auto', image: require('../assets/car.png'), syllables: ['Au', 'to'] },
  //   {
  //     question: 'Auto',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/car.png'),
  //         require('../assets/blume.png'),
  //         require('../assets/house.png'),
  //         require('../assets/rampe.png'),
  //       ],
  //       correct: [0],
  //     },
  //   },
  //   { word: 'Ameise', image: require('../assets/ameise.png'), syllables: ['Amei', 'se'] },
  //   {
  //     question: 'Ameise',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/ente.png'),
  //         require('../assets/ameise.png'),
  //         require('../assets/maus.png'),
  //         require('../assets/affe.png'),
  //       ],
  //       correct: [1],
  //     },
  //   },
  //   { word: 'Affe', image: require('../assets/affe.png') },
  //   {
  //     question: 'Affe',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/ente.png'),
  //         require('../assets/ameise.png'),
  //         require('../assets/maus.png'),
  //         require('../assets/affe.png'),
  //       ],
  //       correct: [3],
  //     },
  //   },
  //   { word: 'Ananas', image: require('../assets/ananas.png'), syllables: ['Ana', 'nas'] },
  //   {
  //     question: 'Ananas',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/mango.png'),
  //         require('../assets/apfel.png'),
  //         require('../assets/ananas.png'),
  //         require('../assets/banane.png'),
  //       ],
  //       correct: [2],
  //     },
  //   },
  //   { word: 'Apfel', image: require('../assets/apfel.png'), syllables: ['Ap', 'fel'] },
  //   {
  //     question: 'Apfel',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/apfel.png'),
  //         require('../assets/banane.png'),
  //         require('../assets/kartoffel.png'),
  //         require('../assets/mango.png'),
  //       ],
  //       correct: [0],
  //     },
  //   },
  //   /******************************* B *********************************/
  //   { word: 'Brot', image: require('../assets/brot.png') },
  //   { word: 'Banane', image: require('../assets/banane.png'), syllables: ['Ba', 'na', 'ne'] },
  //   {
  //     question: 'Banane',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/apfel.png'),
  //         require('../assets/kartoffel.png'),
  //         require('../assets/banane.png'),
  //         require('../assets/mango.png'),
  //       ],
  //       correct: [2],
  //     },
  //   },
  //   { word: 'Biene', image: require('../assets/biene.png'), syllables: ['Bie', 'ne'] },
  //   /******************************* B *********************************/
  //   { word: 'Dossier', image: require('../assets/dossier.png'), syllables: ['Dos', 'si', 'er']},
  //   {
  //     question: 'Dossier',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/koffer.png'),
  //         require('../assets/mantel.png'),
  //         require('../assets/lampe.png'),
  //         require('../assets/dossier.png'),
  //       ],
  //       correct: [3],
  //     },
  //   },
  //   /******************************* B *********************************/
  //   { word: 'Camion', image: require('../assets/camion.png'), syllables: ['Ca', 'mi', 'on']},
  //   {
  //     question: 'Camion',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/wheel.png'),
  //         require('../assets/toeff.png'),
  //         require('../assets/camion.png'),
  //         require('../assets/car.png'),
  //       ],
  //       correct: [2],
  //     },
  //   },
  //   /******************************* E *********************************/
  //   { word: 'Ente', image: require('../assets/ente.png'), syllables: ['En', 'te'] },
  //   {
  //     question: 'Ente',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/ente.png'),
  //         require('../assets/biene.png'),
  //         require('../assets/affe.png'),
  //         require('../assets/maus.png'),
  //       ],
  //       correct: [0],
  //     },
  //   },
  //   { word: 'Esel', image: require('../assets/esel.png') },
  //   {
  //     question: 'Esel',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/biene.png'),
  //         require('../assets/esel.png'),
  //         require('../assets/maus.png'),
  //         require('../assets/ente.png'),
  //       ],
  //       correct: [1],
  //     },
  //   },
  //   { word: 'Etui', image: require('../assets/etui.png') },
  //   /******************************* H *********************************/
  //   { word: 'Hase', image: require('../assets/hase.png'), syllables: ['Ha', 'se'] },
  //   {
  //     question: 'Hase',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/ente.png'),
  //         require('../assets/biene.png'),
  //         require('../assets/hase.png'),
  //         require('../assets/esel.png'),
  //       ],
  //       correct: [2],
  //     },
  //   },
  //   /******************************* I *********************************/
  //   { word: 'Insel', image: require('../assets/insel.png'), syllables: ['In', 'sel'] },
  //   {
  //     question: 'Insel',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/mango.png'),
  //         require('../assets/insel.png'),
  //         require('../assets/kartoffel.png'),
  //         require('../assets/garten.png'),
  //       ],
  //       correct: [1],
  //     },
  //   },
  //   { word: 'Igel', image: require('../assets/igel.png') },
  //   {
  //     question: 'Igel',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/lion.png'),
  //         require('../assets/hase.png'),
  //         require('../assets/panda.png'),
  //         require('../assets/igel.png'),
  //       ],
  //       correct: [3],
  //     },
  //   },
  //   /******************************* L *********************************/
  //   { word: 'Labyrinth', image: require('../assets/labyrinth.png'), syllables: ['La', 'by', 'rinth'] },
  //   { word: 'Lupe', image: require('../assets/lupe.png'), syllables: ['Lu', 'pe'] },
  //   {
  //     question: 'Lupe',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/fork.png'),
  //         require('../assets/ordner.png'),
  //         require('../assets/lupe.png'),
  //         require('../assets/lampe.png'),
  //       ],
  //       correct: [2],
  //     },
  //   },
  //   { word: 'Lampe', image: require('../assets/lampe.png'), syllables: ['Lam', 'pe'] },
  //   {
  //     question: 'Lampe',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/plate.png'),
  //         require('../assets/trophy.png'),
  //         require('../assets/fork.png'),
  //         require('../assets/lampe.png'),
  //       ],
  //       correct: [3],
  //     },
  //   },
  //   { word: 'Luftballons', image: require('../assets/luftballons.png'), syllables: ['Luft', 'bal', 'lons'] },
  //   {
  //     question: 'Luftballons',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/mask.png'),
  //         require('../assets/rose.png'),
  //         require('../assets/vase.png'),
  //         require('../assets/luftballons.png'),
  //       ],
  //       correct: [3],
  //     },
  //   },
  //   { word: 'Koffer', image: require('../assets/koffer.png'), syllables: ['Kof', 'fer'] },
  //   /******************************* M *********************************/
  //   { word: 'Mais', image: require('../assets/mais.png') },
  //   {
  //     question: 'Mais',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/salami.png'),
  //         require('../assets/mais.png'),
  //         require('../assets/pizza.png'),
  //         require('../assets/mango.png'),
  //       ],
  //       correct: [1],
  //     },
  //   },
  //   { word: 'Maus', image: require('../assets/maus.png') },
  //   {
  //     question: 'Maus',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/esel.png'),
  //         require('../assets/biene.png'),
  //         require('../assets/ente.png'),
  //         require('../assets/maus.png'),
  //       ],
  //       correct: [3],
  //     },
  //   },
  //   { word: 'Melone', image: require('../assets/melone.png'), syllables: ['Me', 'lo', 'ne'] },
  //   {
  //     question: 'Melone',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/mango.png'),
  //         require('../assets/apfel.png'),
  //         require('../assets/melone.png'),
  //         require('../assets/banane.png'),
  //       ],
  //       correct: [2],
  //     },
  //   },
  //   { word: 'Mango', image: require('../assets/mango.png'), syllables: ['Man', 'go'] },
  //   {
  //     question: 'Mango',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/mango.png'),
  //         require('../assets/apfel.png'),
  //         require('../assets/melone.png'),
  //         require('../assets/banane.png'),
  //       ],
  //       correct: [0],
  //     },
  //   },
  //   { word: 'Mantel', image: require('../assets/mantel.png'), syllables: ['Man', 'tel'] },
  //   {
  //     question: 'Mantel',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/pants.png'),
  //         require('../assets/mantel.png'),
  //         require('../assets/kissen.png'),
  //         require('../assets/socken.png'),
  //       ],
  //       correct: [1],
  //     },
  //   },
  //   { word: 'Müll', image: require('../assets/muell.png') },
  //   {
  //     question: 'Müll',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/vase.png'),
  //         require('../assets/pommes.png'),
  //         require('../assets/roboter.png'),
  //         require('../assets/muell.png'),
  //       ],
  //       correct: [3],
  //     },
  //   },
  //   { word: 'Müllwagen', image: require('../assets/muellwagen.png'), syllables: ['Müll', 'wa', 'gen']},
  //   {
  //     question: 'Müllwagen',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/helicopter.png'),
  //         require('../assets/toeff.png'),
  //         require('../assets/car.png'),
  //         require('../assets/muellwagen.png'),
  //       ],
  //       correct: [3],
  //     },
  //   },
  //   /******************************* N *********************************/
  //   { word: 'Nagel', image: require('../assets/nagel.png'), syllables: ['Na', 'gel']},
  //   {
  //     question: 'Nagel',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/nagel.png'),
  //         require('../assets/plate.png'),
  //         require('../assets/spoon.png'),
  //         require('../assets/stern.png'),
  //       ],
  //       correct: [0],
  //     },
  //   },
  //   /******************************* O *********************************/
  //   { word: 'Ofen', image: require('../assets/ofen.png') },
  //   { word: 'Ordner', image: require('../assets/ordner.png'), syllables: ['Ord', 'ner'] },
  //   /******************************* R *********************************/
  //   { word: 'Rose', image: require('../assets/rose.png'), syllables: ['Ro', 'se'] },
  //   /******************************* S *********************************/
  //   { word: 'Salat', image: require('../assets/salat.png'), syllables: ['Sa', 'lat'] },
  //   { word: 'Skelett', image: require('../assets/skelett.png'), syllables: ['Ske', 'lett'] },
  //   {
  //     question: 'Skelett',
  //     imageAnswers: {
  //       images: [require('../assets/zombie.png'), require('../assets/vampir.png'), require('../assets/vogel.png'), require('../assets/skelett.png')],
  //       correct: [3],
  //     },
  //   },
  //   {
  //     question: 'Salat',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/salat.png'),
  //         require('../assets/salami.png'),
  //         require('../assets/pommes.png'),
  //         require('../assets/brot.png'),
  //       ],
  //       correct: [0],
  //     },
  //   },
  //   { word: 'Sandalen', image: require('../assets/sandalen.png'), syllables: ['San', 'da', 'len'] },
  //   {
  //     question: 'Sandalen',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/sandalen.png'),
  //         require('../assets/pants.png'),
  //         require('../assets/mantel.png'),
  //         require('../assets/hat.png'),
  //       ],
  //       correct: [0],
  //     },
  //   },
  //   { word: 'Salami', image: require('../assets/salami.png'), syllables: ['Sa', 'la', 'mi'] },
  //   {
  //     question: 'Salami',
  //     imageAnswers: {
  //       images: [
  //         require('../assets/pizza.png'),
  //         require('../assets/salami.png'),
  //         require('../assets/mango.png'),
  //         require('../assets/mais.png'),
  //       ],
  //       correct: [1],
  //     },
  //   },
  //   /******************************* T *********************************/
  //   { word: 'Tomate', image: require('../assets/tomato.png'), syllables: ['To', 'ma', 'te'] },
  //   /******************************* V *********************************/
  //   { word: 'Vogel', image: require('../assets/vogel.png') },
  //   {
  //     question: 'Vogel',
  //     imageAnswers: {
  //       images: [require('../assets/bear.png'), require('../assets/tiger.png'), require('../assets/vogel.png'), require('../assets/krokodil.png')],
  //       correct: [2],
  //     },
  //   },
  //   { word: 'Vampir', image: require('../assets/vampir.png'), syllables: ['Vam', 'pir'] },
  //   {
  //     question: 'Vampir',
  //     imageAnswers: {
  //       images: [require('../assets/vampir.png'), require('../assets/krokodil.png'), require('../assets/tiger.png'), require('../assets/vogel.png')],
  //       correct: [0],
  //     },
  //   },
  //   /******************************* Z *********************************/
  //   { word: 'Zombie', image: require('../assets/zombie.png'), syllables: ['Zom', 'bie'] },
  //   {
  //     question: 'Zombie',
  //     imageAnswers: {
  //       images: [require('../assets/vampir.png'), require('../assets/zombie.png'), require('../assets/vogel.png'), require('../assets/tiger.png')],
  //       correct: [1],
  //     },
  //   },










  // /******************** CHOOSE OPTION ****************************/


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
  //     images: [require('../assets/dog.png'), require('../assets/lion.png'), require('../assets/igel.png'), require('../assets/shark.png')],
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
  //     images: [require('../assets/arzt.png'), require('../assets/cop.png'), require('../assets/koch.png'), require('../assets/aerztin.png')],
  //     correct: [2],
  //   },
  // },
  // {
  //   question: 'Wer ist der Polizist?',
  //   imageAnswers: {
  //     images: [require('../assets/arzt.png'), require('../assets/cop.png'), require('../assets/koch.png'), require('../assets/aerztin.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Wer ist schneller?',
  //   imageAnswers: {
  //     images: [require('../assets/schnecke.png'), require('../assets/toeff.png'), require('../assets/panda.png'), require('../assets/igel.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Wer ist langsamer?',
  //   imageAnswers: {
  //     images: [require('../assets/schnecke.png'), require('../assets/toeff.png'), require('../assets/panda.png'), require('../assets/igel.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Welches ist süss?',
  //   imageAnswers: {
  //     images: [require('../assets/pommes.png'), require('../assets/cucumber.png'), require('../assets/brot.png'), require('../assets/apfel.png')],
  //     correct: [3],
  //   },
  // },
  // {
  //   question: 'Welches ist die Sonne?',
  //   imageAnswers: {
  //     images: [require('../assets/sun.png'), require('../assets/planet.png'), require('../assets/moon.png'), require('../assets/stern.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Welcher ist der Planet?',
  //   imageAnswers: {
  //     images: [require('../assets/sun.png'), require('../assets/planet.png'), require('../assets/moon.png'), require('../assets/stern.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Welches ist der Mond?',
  //   imageAnswers: {
  //     images: [require('../assets/sun.png'), require('../assets/planet.png'), require('../assets/moon.png'), require('../assets/stern.png')],
  //     correct: [2],
  //   },
  // },
  // {
  //   question: 'Welcher ist der Stern?',
  //   imageAnswers: {
  //     images: [require('../assets/sun.png'), require('../assets/planet.png'), require('../assets/moon.png'), require('../assets/stern.png')],
  //     correct: [3],
  //   },
  // },
  // {
  //   question: 'Wer gibt Milch?',
  //   imageAnswers: {
  //     images: [require('../assets/cat.png'), require('../assets/kuh.png'), require('../assets/affe.png'), require('../assets/dog.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Wer ist Pikachus Trainer?',
  //   imageAnswers: {
  //     images: [require('../assets/serena.png'), require('../assets/leaf.png'), require('../assets/red.png'), require('../assets/ash.png')],
  //     correct: [3],
  //   },
  // },
  // {
  //   question: 'Welches ist Globi?',
  //   imageAnswers: {
  //     images: [require('../assets/globi.png'), require('../assets/pikachu.png'), require('../assets/mario.png'), require('../assets/sonic.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Welches ist Pikachu?',
  //   imageAnswers: {
  //     images: [require('../assets/mario.png'), require('../assets/sonic.png'), require('../assets/pikachu.png'), require('../assets/globi.png')],
  //     correct: [2],
  //   },
  // },
  // {
  //   question: 'Welcher ist Sonic?',
  //   imageAnswers: {
  //     images: [require('../assets/mario.png'), require('../assets/sonic.png'), require('../assets/globi.png'), require('../assets/pikachu.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Welches ist Mario?',
  //   imageAnswers: {
  //     images: [require('../assets/sonic.png'), require('../assets/globi.png'), require('../assets/pikachu.png'), require('../assets/mario.png')],
  //     correct: [3],
  //   },
  // },
  // {
  //   question: 'Welcher ist Harry Potter?',
  //   imageAnswers: {
  //     images: [require('../assets/draco.png'), require('../assets/harry_potter.png'), require('../assets/voldemort.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Welcher ist Draco?',
  //   imageAnswers: {
  //     images: [require('../assets/draco.png'), require('../assets/harry_potter.png'), require('../assets/voldemort.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Welcher ist Voldemort?',
  //   imageAnswers: {
  //     images: [require('../assets/voldemort.png'), require('../assets/draco.png'), require('../assets/harry_potter.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Welcher ist Räuber Hotzenplotz?',
  //   imageAnswers: {
  //     images: [require('../assets/harry_potter.png'), require('../assets/hotzenplotz.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Welcher ist Peter?',
  //   imageAnswers: {
  //     images: [require('../assets/justus.png'), require('../assets/peter.png'), require('../assets/bob.png')],
  //     correct: [1],
  //   },
  // },
  // {
  //   question: 'Welcher ist Justus?',
  //   imageAnswers: {
  //     images: [require('../assets/justus.png'), require('../assets/bob.png'), require('../assets/peter.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Welcher ist Bob?',
  //   imageAnswers: {
  //     images: [require('../assets/bob.png'), require('../assets/peter.png'), require('../assets/justus.png')],
  //     correct: [0],
  //   },
  // },
  // {
  //   question: 'Wer hat blonde Haare??',
  //   imageAnswers: {
  //     images: [require('../assets/peter.png'), require('../assets/bob.png'), require('../assets/justus.png')],
  //     correct: [1],
  //   },
  // },






  // /******************** English ****************************/
  {
    audio: require('../assets/audio/words/en/bus.mp3'),
    imageAnswers: {
      images: [require('../assets/car.png'), require('../assets/bus.png'), require('../assets/crane.png'), require('../assets/titanic.png')],
      correct: [1],
    },
  },
  {
    audio: require('../assets/audio/words/en/tree.mp3'),
    imageAnswers: {
      images: [require('../assets/blume.png'), require('../assets/nuss.png'), require('../assets/karotte.png'), require('../assets/tree.png')],
      correct: [3],
    },
  },
  {
    audio: require('../assets/audio/words/en/mouse.mp3'),
    imageAnswers: {
      images: [require('../assets/maus.png'), require('../assets/lion.png'), require('../assets/tiger.png'), require('../assets/schwein.png')],
      correct: [0],
    },
  },
  {
    audio: require('../assets/audio/words/en/pig.mp3'),
    imageAnswers: {
      images: [require('../assets/vogel.png'), require('../assets/schwein.png'), require('../assets/whale.png'), require('../assets/shark.png')],
      correct: [1],
    },
  },
  {
    audio: require('../assets/audio/words/en/bird.mp3'),
    imageAnswers: {
      images: [require('../assets/spinne.png'), require('../assets/schwein.png'), require('../assets/vogel.png'), require('../assets/schnecke.png')],
      correct: [2],
    },
  },
  {
    audio: require('../assets/audio/words/en/sun.mp3'),
    imageAnswers: {
      images: [require('../assets/moon.png'), require('../assets/sun.png'), require('../assets/stern.png'), require('../assets/planet.png')],
      correct: [1],
    },
  },
  {
    audio: require('../assets/audio/words/en/planet.mp3'),
    imageAnswers: {
      images: [require('../assets/sun.png'), require('../assets/moon.png'), require('../assets/planet.png'), require('../assets/stern.png')],
      correct: [2],
    },
  },
  {
    audio: require('../assets/audio/words/en/star.mp3'),
    imageAnswers: {
      images: [require('../assets/stern.png'), require('../assets/moon.png'), require('../assets/sun.png'), require('../assets/planet.png')],
      correct: [0],
    },
  },
  {
    audio: require('../assets/audio/words/en/moon.mp3'),
    imageAnswers: {
      images: [require('../assets/planet.png'), require('../assets/stern.png'), require('../assets/sun.png'), require('../assets/moon.png')],
      correct: [3],
    },
  },
];

export default CONFIG;
