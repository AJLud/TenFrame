import { StyleSheet, View } from 'react-native';
import useScreenSize from '../../hooks/useScreenSize';

interface Props {
  filled: boolean;
  windowWidth: number;
}

const Frame = ({ filled, windowWidth }: Props) => {
  const frameSize = windowWidth * 0.1 * 2;
  const counterSize = frameSize * 0.75;

  return (
    <View style={[styles.frame, { width: frameSize }]}>
      {filled && <View style={[styles.counter, { width: counterSize }]}></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1 / 1,
  },
  counter: {
    aspectRatio: 1 / 1,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 180,
    backgroundColor: '#ff0000',
  },
});

export default Frame;
