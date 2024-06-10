import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';
const Header = () => {
  return (
    <View style={styles.main__container}>
      <Image
        source={require('../../assets/image/jacknkones.png')}
        style={{width: '55%'}}
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;
