import { StyleSheet, Text } from 'react-native';

interface Props {
  number: number;
  windowWidth: number;
}

export const NumberDisplay = ({ number, windowWidth }: Props) => {
  const styles = StyleSheet.create({
    numberDisplay: {
      marginTop: 20,
      fontSize: 40,
    },
  });

  return <Text style={styles.numberDisplay}>{number}</Text>;
};
