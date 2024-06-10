import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import ProductOrderCard from '../../common/ProductOrderCard/ProductOrderCard';
import {BLACK, DARK_GREY} from '../../values/Colors';
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import SecondaryHeader from '../../common/SecondaryHeader/SecondaryHeader';

const productOrderData = [
  {
    productName: 'Black T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/1.png'),
  },
  {
    productName: 'Crew Neck T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/2.png'),
  },
  {
    productName: 'Green T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/3.png'),
  },
  {
    productName: 'Black T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/1.png'),
  },
  {
    productName: 'Crew Neck T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/2.png'),
  },
  {
    productName: 'Green T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/3.png'),
  },
];

const CartOrder = () => {
  const [text, onChangeText] = React.useState('');
  const navigation = useNavigation();
  const handlePlaceHolder = () => {
    navigation.navigate('CartDelivery');
  };
  const handleCoupon = () => {
    navigation.navigate('Promotion');
  };
  return (
    <>
      <View style={styles.main__container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView__container}>
          <SecondaryHeader headerTitle={'CartOrder'} />
          <Text style={styles.yourOrderText}>YOUR ORDER</Text>

          <View style={styles.productCards__container}>
            {productOrderData?.map((product, index) => (
              <ProductOrderCard data={product} />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottom__container}>
        <View style={styles.applyCoupon__container}>
          <View style={styles.InputApply__container}>
            <TextInput
              placeholder="Enter Coupon Code"
              placeholderTextColor={DARK_GREY}
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <PrimaryButton btnTitle={'Apply'} customStyle={styles.applyBtn} />
          </View>
          <TouchableOpacity
            style={styles.coupon__container}
            onPress={handleCoupon}>
            <Text style={styles.couponText}>Coupons</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.price_container}>
          <View style={styles.price}>
            <Text style={[styles.W400S16, {color: BLACK}]}>Sub Total</Text>
            <Text style={[styles.W400S16, {color: BLACK}]}>RS.2211</Text>
          </View>
          <View style={styles.price}>
            <Text style={[styles.W400S16]}>Delivery Fee</Text>
            <Text style={[styles.W400S16, {color: BLACK}]}>RS.99</Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.total_mrp}>Total MRP</Text>
            <Text style={styles.total_mrp}>RS.2211</Text>
          </View>
        </View>
        <PrimaryButton
          btnTitle={'Place Order'}
          customStyle={styles.placeOrder__btn}
          handleBtn={handlePlaceHolder}
        />
      </View>
    </>
  );
};

export default CartOrder;
