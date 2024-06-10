import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const MyCoupon = ({data}) => {
  return (
    <View style={styles.main__container}>
      <View style={styles.content__container}>
        <Text style={styles.couponTypeText}>{data.couponType}</Text>
        <Text style={styles.discount_percentText}>{data.discount_percent}</Text>
        <Text style={styles.OFFText}>OFF</Text>
        <Text style={styles.couponValidityText}>30 days valid</Text>
      </View>
      <PrimaryButton
        btnTitle={'Redeem'}
        customStyle={styles.redeemBtn__container}
        customTextStyle={styles.redeemBtn__Text}
      />
      <View style={styles.leftHalfCircle} />
      <View style={styles.rightHalfCircle} />
    </View>
  );
};

export default MyCoupon;
