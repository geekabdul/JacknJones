import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const ProductCard = ({data, from}) => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('ProductDetailPage', data);
  };
  return (
    <TouchableOpacity style={styles.main__container} onPress={handleNavigate}>
      <Image source={data.img} />
      <View style={styles.productDetail}>
        <Text style={styles.W400_S16}>{data.productName}</Text>
        <Text style={styles.W400_S14}>
          MRP: <Text style={styles.W600_S14}>{data.mrp}</Text>
        </Text>
        <Text>{data.isAvailable}</Text>
        {from === 'orderReceived' ? (
          <View style={styles.status__container}>
            <Text style={styles.statusText}>Status</Text>
            <Text style={styles.packedText}>PACKED</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
