import { StyleSheet, TextInput, Button, View } from 'react-native';
import { useState } from 'react';

interface Props {
  setInputNumber: Function;
  windowWidth: number;
}

export const NumberInput = ({ setInputNumber, windowWidth }: Props) => {
  const [number, setNumber] = useState<string>();
  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={3}
        value={number}
        onChangeText={text => {
          const validated = text.replace(/[^0-9]/g, '');
          parseInt(validated) > 10 ? setNumber('10') : setNumber(validated);
        }}
      />
      <Button title="Go!" color="#009d0d" onPress={() => setInputNumber(number)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 100,
    aspectRatio: 1 / 1,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
});
