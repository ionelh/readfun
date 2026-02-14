import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { Button, StyleSheet, TouchableHighlight, Text } from 'react-native';

const AudioPlayer = ({ audio }) => {
  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(audio);
      soundRef.current = sound;
    }

    loadSound();

    return () => {
      soundRef.current?.unloadAsync();
    };
  }, [audio]);

  const playSound = async () => {
    await soundRef.current?.replayAsync();
  };

  return (
    <TouchableHighlight onPress={playSound}>
        <Text style={styles.button}>{'\u25B6'}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 100,
  },
});

export default AudioPlayer;