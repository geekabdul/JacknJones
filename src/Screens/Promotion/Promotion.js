import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import SecondaryHeader from '../../common/SecondaryHeader/SecondaryHeader';
import Coupon from '../../common/Coupon/Coupon';
import MyCoupon from '../../common/MyCoupon/MyCoupon';

const myCouponsData = [
  {
    couponType: 'First Purchase',
    discount_percent: '50%',
    couponValidity: '30 days valid',
  },
  {
    couponType: 'Deal of the day',
    discount_percent: '20%',
    couponValidity: '30 days valid',
  },
  {
    couponType: 'First Purchase',
    discount_percent: '50%',
    couponValidity: '30 days valid',
  },
];

const couponsData = [
  {
    img: require('../../assets/image/axis.png'),
    discount__type: 'Discount Upto',
    discount_percent: '25% - 50%',
    couponCode: 'FKFFJKD',
    expireIn: '4 days remaining',
    isNew: true,
  },
  {
    img: require('../../assets/image/purple.png'),
    discount__type: 'Flat Discount',
    discount_percent: '10% off your next order',
    couponCode: 'FKSKIKF',
    expireIn: '4 days remaining',
    isNew: false,
  },
  {
    img: require('../../assets/image/visa.png'),
    discount__type: 'Discount Upto',
    discount_percent: '25% -50%',
    couponCode: 'ADKLEO',
    expireIn: '4 days remaining',
    isNew: true,
  },
  {
    img: require('../../assets/image/master.png'),
    discount__type: 'Discount Upto',
    discount_percent: '25% - 50%',
    couponCode: 'FKFFJKD',
    expireIn: '4 days remaining',
    isNew: true,
  },
];
const Promotion = () => {
  return (
    <View style={styles.main__container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SecondaryHeader headerTitle={'Promotion'} />
        <View style={styles.myCoupons__container}>
          <Text style={styles.myCouponsText}>My Coupons</Text>
          <ScrollView
            style={styles.myCoupons__subContainer}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {myCouponsData?.map(mycoupon => (
              <MyCoupon data={mycoupon} />
            ))}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.myCouponsText}> Coupons</Text>
          <View style={styles.coupons__container}>
            {couponsData?.map(coupon => (
              <Coupon data={coupon} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Promotion;
