import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {WHITE} from '../../values/Colors';

const Successfull = () => {
  return (
    <View style={styles.main__container}>
      <View style={styles.checkBordreLine__container}>
        <View style={styles.checkCircle__container}>
          <AntDesign name="check" size={40} color={WHITE} />
        </View>
      </View>
      <Text style={styles.SuccessfullText}>Successful!</Text>
      <Text style={styles.successfullNote__Text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </View>
  );
};

export default Successfull;
