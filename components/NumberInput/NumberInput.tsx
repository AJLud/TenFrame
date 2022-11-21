import { StyleSheet, TextInput, Button, View } from 'react-native';
import { useState } from 'react';

interface Props {
  setInputNumber: Function;
  windowWidth: number;
}

export const NumberInput = ({ setInputNumber, windowWidth }: Props) => {
  const [number, setNumber] = useState<number>(0);
  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={2}
        value={number}
        onChangeText={text => {
          text > 10 ? setNumber(10) : setNumber(text);
        }}
      />
      <Button title="Go!" color="#009d0d" onPress={() => setInputNumber(number)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 100,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
});
