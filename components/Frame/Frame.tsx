import { StyleSheet, View } from 'react-native';

interface Props {
  filled: boolean;
}

const Frame = ({ filled }: Props) => {
  return <View style={styles.frame}>{filled && <View style={styles.counter}></View>}</View>;
};

const styles = StyleSheet.create({
  frame: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000000',
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    height: 75,
    width: 75,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 180,
    backgroundColor: '#ff0000',
  },
});

export default Frame;
