import { StyleSheet, Text } from 'react-native';

interface Props {
  number: number;
  screenWidth: number;
}

export const NumberDisplay = ({ number, screenWidth }: Props) => {
  return <Text style={styles.numberDisplay}>{number}</Text>;
};

const styles = StyleSheet.create({
  numberDisplay: {
    marginTop: 20,
    fontSize: 40,
  },
});
