import {Image, Text, View} from 'react-native';
import React from 'react';
import {RED} from '../../values/Colors';
import styles from './styles';

const StoreCard = ({item}) => {
  return (
    <View style={styles.main__container}>
      <View>
        <Image source={item.img} style={styles.image} />
      </View>
      <View style={styles.storeDetails__container}>
        <Text style={styles.cardText}>{item.name}</Text>
        <Text style={styles.MrpText}>Moman | Man | Kids</Text>
        <View style={styles.flexRow}>
          <Text style={styles.MrpText}>Location: {item?.Loction}</Text>
          <Text style={styles.PriceText}> {item?.distance}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.PriceText}>Size: {item?.Size}</Text>

          <Text style={[styles.PriceText, {color: RED}]}>
            {item.isOpen ? 'Open Now' : 'Closed'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StoreCard;
