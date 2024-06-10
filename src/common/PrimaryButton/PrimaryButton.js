import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const PrimaryButton = ({btnTitle, handleBtn, customStyle, customTextStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.main__container, customStyle]}
      onPress={handleBtn}>
      <Text style={[styles.btnText, customTextStyle]}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
