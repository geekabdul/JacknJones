import {View} from 'react-native';
import React from 'react';
import SecondaryHeader from '../../common/SecondaryHeader/SecondaryHeader';
import {ScrollView} from 'react-native';
import styles from './styles';
import OrderListCard from '../../common/OrderListCard/OrderListCard';

const OrderListData = [
  {
    productName: 'Black T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/1.png'),
    status: 'CREATED',
  },
  {
    productName: 'Crew Neck T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/2.png'),
    status: 'PACKED',
  },
  {
    productName: 'Green T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/3.png'),
    status: 'DELIVERED',
  },
  {
    productName: 'Black T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/1.png'),
    status: 'CREATED',
  },
  {
    productName: 'Crew Neck T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/2.png'),
    status: 'PACKED',
  },
  {
    productName: 'Green T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/3.png'),
    status: 'DELIVERED',
  },
];
const OrderList = () => {
  return (
    <View style={styles.main__container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // style={styles.scrollView__container}
      >
        <SecondaryHeader headerTitle={'Order Lists'} />
        <View style={styles.OrderListCards__container}>
          {OrderListData?.map((product, index) => (
            <OrderListCard data={product} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderList;
