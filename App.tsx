import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NumberDisplay } from './components/NumberDisplay/NumberDisplay';
import { NumberInput } from './components/NumberInput/NumberInput';
import TenFrame from './components/TenFrame/TenFrame';
import useScreenSize from './hooks/useScreenSize';

export default function App() {
  const [inputNumber, setInputNumber] = useState<number>(0);

  const { width } = useScreenSize();
  const windowWidth = width > 1300 ? width * 0.5 : width * 0.75;

  return (
    <View style={styles.container}>
      <TenFrame number={inputNumber} windowWidth={windowWidth} />
      <NumberDisplay number={inputNumber} windowWidth={windowWidth} />
      <NumberInput setInputNumber={setInputNumber} windowWidth={windowWidth} />
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
