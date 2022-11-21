import { StyleSheet, View, Dimensions } from 'react-native';
import useScreenSize from '../../hooks/useScreenSize';
import Frame from '../Frame/Frame';

interface Props {
  number: number;
  windowWidth: number;
}

const TenFrame = ({ number, windowWidth }: Props) => {
  let frameArray = [];
  for (let i = 0; i < 10; i++) {
    i < number ? frameArray.push({ filled: true }) : frameArray.push({ filled: false });
  }

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: windowWidth,
      paddingTop: 50,
    },
  });

  return (
    <View style={styles.container}>
      {frameArray.map(frame => {
        return <Frame filled={frame.filled} windowWidth={windowWidth} />;
      })}
    </View>
  );
};

export default TenFrame;
