import { StyleSheet, TextInput, TouchableOpacity, View, Text, Keyboard } from 'react-native';
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
        maxLength={2}
        value={number}
        returnKeyType="done"
        onChangeText={text => {
          const validated = text.replace(/[^0-9]/g, '');
          parseInt(validated) > 10 ? setNumber('10') : setNumber(validated);
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Keyboard.dismiss();
          return setInputNumber(number);
        }}
      >
        <Text style={styles.text}>Go!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 100,
    aspectRatio: 1 / 1,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 30,
    textAlign: 'center',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#009d0d',
    width: 100,
    aspectRatio: 1 / 1,
    borderWidth: 2,
    borderRadius: 180,
    borderColor: '#fff',
    margin: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: '#fff',
  },
});
