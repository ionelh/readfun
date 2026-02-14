import { StyleSheet, Text, View, Image } from 'react-native';
import ChooseImage from './ChooseImage';
import AudioPlayer from './AudioPlayer';

const AudioQuestion = ({ imageAnswers, correctAnswerIndexes, audio, handleNext }) => {
  const handleAnswer = (answerIndex) => {
    if (correctAnswerIndexes.includes(answerIndex)) handleNext();
  };

  return (
    <View style={{...styles.container}}>
      <AudioPlayer audio={audio} />
      <ChooseImage images={imageAnswers} handleAnswer={handleAnswer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkorange',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
});

export default AudioQuestion;
