import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NumberDisplay } from './components/NumberDisplay/NumberDisplay';
import { NumberInput } from './components/NumberInput/NumberInput';
import TenFrame from './components/TenFrame/TenFrame';

export default function App() {
  const [inputNumber, setInputNumber] = useState<number>(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TenFrame number={inputNumber} />
      <NumberDisplay number={inputNumber} />
      <NumberInput setInputNumber={setInputNumber} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07b2e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
