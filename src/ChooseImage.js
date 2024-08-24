import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const ChooseImage = ({ images, handleAnswer }) => {
  return (
    <View style={{...styles.container}}>
      {images.map((image, i) => {
        return (
          <TouchableHighlight
            onPress={() => handleAnswer(i)}
            key={i}
            style={{ ...styles.image, ...(i % 2 === 0 ? styles.imageColumnOne : {}) }}
          >
            <Image source={images[i]} />
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  image: {
    marginTop: 10,
    overflow: 'hidden',
    justifyContent: 'center',
  },

  imageColumnOne: {
    marginRight: 30,
  },
});

export default ChooseImage;
