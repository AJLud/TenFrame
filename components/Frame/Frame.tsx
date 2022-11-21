import { StyleSheet, View } from 'react-native';
import useScreenSize from '../../hooks/useScreenSize';

interface Props {
  filled: boolean;
  windowWidth: number;
}

const Frame = ({ filled, windowWidth }: Props) => {
  const FrameSize = windowWidth * 0.1 * 2;

  const styles = StyleSheet.create({
    frame: {
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#000000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: FrameSize,
      aspectRatio: 1 / 1,
    },
    counter: {
      width: FrameSize * 0.75,
      aspectRatio: 1 / 1,
      borderWidth: 2,
      borderColor: '#000000',
      borderRadius: 180,
      backgroundColor: '#ff0000',
    },
  });

  return <View style={styles.frame}>{filled && <View style={styles.counter}></View>}</View>;
};

export default Frame;
