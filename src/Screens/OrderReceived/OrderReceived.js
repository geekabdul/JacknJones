import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../common/Header/Header';
import styles from './styles';
import ProductCard from '../../common/ProductCard/ProductCard';

const ReceivedData = [
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
const OrderReceived = () => {
  return (
    <>
      <Header />
      <ScrollView style={styles.main__container}>
        <Text style={styles.storeHeading}>Order Received</Text>
        <View style={styles.productCards__container}>
          {ReceivedData?.map((product, index) => (
            <ProductCard data={product} from={'orderReceived'} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default OrderReceived;
