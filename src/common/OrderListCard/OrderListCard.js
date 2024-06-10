import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const OrderListCard = ({data}) => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('ProductDetailPage', data);
  };
  return (
    <TouchableOpacity style={styles.main__container} onPress={handleNavigate}>
      <Text style={styles.date}>22 Nov</Text>
      <View style={styles.container}>
        <Image source={data.img} />
        <View style={styles.productDetail}>
          <Text style={styles.W400_S16}>{data.productName}</Text>
          <Text style={styles.W400_S14}>
            MRP: <Text style={styles.W600_S14}>{data.mrp}</Text>
          </Text>
          <Text>{data.isAvailable}</Text>
          <View style={styles.status__container}>
            <Text style={styles.statusText}>Status</Text>
            <Text style={styles.packedText}>{data.status}</Text>
          </View>
          <Text style={{marginTop: 10}}>Delivery: Home Delivery</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderListCard;
