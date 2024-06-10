import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const SecondaryHeader = ({headerTitle}) => {
  return (
    <View>
      <Text style={styles.Heading}>{headerTitle}</Text>
      <View style={styles.horizontalLine} />
    </View>
  );
};

export default SecondaryHeader;
