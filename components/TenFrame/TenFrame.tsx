import { StyleSheet, View } from 'react-native';

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

  return (
    <View style={[styles.container, { width: windowWidth }]}>
      {frameArray.map((frame, i) => {
        return <Frame key={i} filled={frame.filled} windowWidth={windowWidth} />;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 50,
  },
});

export default TenFrame;
