import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import ProductOrderCard from '../../common/ProductOrderCard/ProductOrderCard';
import Entypo from 'react-native-vector-icons/Entypo';
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

const deliveryData = [
  {
    title: 'Home Delivery',
    subTitle: 'Get your product delivered to your home.',
  },
  {
    title: 'In store pickup',
    subTitle: 'Collect your Order from Location of your Choice.',
  },
];
const CartDelivery = () => {
  const navigation = useNavigation();
  const handleDelivery = delivery => {
    if (delivery.title === 'Home Delivery') {
      navigation.navigate('CartAddress');
    }
  };
  return (
    <View style={styles.main__container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SecondaryHeader headerTitle={'CartOrder'} />
        <Text style={styles.yourOrderText}>YOUR ORDER</Text>

        <View style={styles.productCards__container}>
          {productOrderData?.map((product, index) => (
            <ProductOrderCard data={product} />
          ))}
        </View>
        <View>
          {deliveryData?.map(delivery => (
            <TouchableOpacity
              style={styles.delivery__container}
              onPress={() => handleDelivery(delivery)}>
              <View>
                <Text style={styles.delivery__title}>{delivery.title}</Text>
                <Text style={styles.delivery__subTitle}>
                  {delivery.subTitle}
                </Text>
              </View>
              <Entypo name="chevron-thin-right" size={15} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CartDelivery;
