import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {PRIMARY_LIGHT} from '../../values/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Coupon = ({data}) => {
  const copycode = code => {
    console.log(code, 'ccccccc');
  };
  return (
    <View style={styles.main__container}>
      <View style={styles.image__container}>
        <Image source={data.img} />
      </View>
      <View style={{marginLeft: 10, flex: 1}}>
        <Text style={styles.discount__type}>{data.discount__type}</Text>
        <Text style={styles.discount_percent}>{data.discount_percent}</Text>
        <View style={styles.rowcenterspacebetween}>
          <View
            style={[
              styles.rowcenterspacebetween,
              styles.couponCode__container,
            ]}>
            <Text
              style={styles.couponCode}
              onPress={() => copycode(data.couponCode)}>
              {data.couponCode}
            </Text>
            <MaterialCommunityIcons
              name="content-copy"
              size={8}
              color={PRIMARY_LIGHT}
            />
          </View>
          <Text style={styles.expireIn}>{data.expireIn}</Text>
        </View>
      </View>
      {data.isNew ? (
        <View style={styles.new__container}>
          <Text style={styles.newText}>New</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Coupon;
