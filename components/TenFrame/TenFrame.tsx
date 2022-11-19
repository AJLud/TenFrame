import { StyleSheet, View, Dimensions } from 'react-native';
import Frame from '../Frame/Frame';

interface Props {
  number: number;
}

const TenFrame = ({ number }: Props) => {
  let array = [];
  for (let i = 0; i < 10; i++) {
    i < number ? array.push({ filled: true }) : array.push({ filled: false });
  }

  return (
    <View style={styles.container}>
      {array.map(frame => {
        return <Frame filled={frame.filled} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 500,
    height: 200,
  },
});

export default TenFrame;
