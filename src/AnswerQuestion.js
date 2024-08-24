import { StyleSheet, Text, View, Image } from 'react-native';
import ChooseImage from './ChooseImage';

const AnswerQuestion = ({ imageAnswers, correctAnswerIndexes, question, handleNext }) => {
  const handleAnswer = (answerIndex) => {
    console.log('!!! correctAnswerIndexes', correctAnswerIndexes, answerIndex);
    if (correctAnswerIndexes.includes(answerIndex)) handleNext();
  };

  return (
    <View style={{...styles.container}}>
      <Text style={styles.placeholder}>
        {question}
      </Text>
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

  placeholder: {
    fontSize: 45,
    textAlign: 'center',
  },
});

export default AnswerQuestion;
