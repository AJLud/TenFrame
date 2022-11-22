import { StyleSheet, View } from 'react-native';

import Frame from '../Frame/Frame';

interface Props {
  number: number;
  screenWidth: number;
}

const TenFrame = ({ number, screenWidth }: Props) => {
  let frameArray = [];
  for (let i = 0; i < 10; i++) {
    i < number ? frameArray.push({ filled: true }) : frameArray.push({ filled: false });
  }

  return (
    <View style={[styles.container, { width: screenWidth }]}>
      {frameArray.map((frame, i) => {
        return <Frame key={i} filled={frame.filled} screenWidth={screenWidth} />;
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
