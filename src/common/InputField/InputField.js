import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';

const InputField = ({label, value, setValue}) => {
  return (
    <View style={styles.main__container}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        keyboardType={
          label === 'Phone Number' || label === 'Pin Code' ? 'numeric' : ''
        }
      />
    </View>
  );
};

export default InputField;
