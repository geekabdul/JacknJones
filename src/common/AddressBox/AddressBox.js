import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {LIGHT_GREY, PRIMARY_LIGHT} from '../../values/Colors';

const AddressBox = ({data, selectedAddress, setSelectedAddress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.main__container,
        {
          borderColor: selectedAddress === data.id ? PRIMARY_LIGHT : LIGHT_GREY,
        },
      ]}
      onPress={() => setSelectedAddress(data.id)}>
      <View style={{}}>
        <View
          style={
            selectedAddress === data.id
              ? styles.selectedRadioOuter__container
              : styles.radioOuter__container
          }>
          <View
            style={
              selectedAddress === data.id
                ? styles.selectedradioInner__container
                : styles.radioInner__container
            }
          />
        </View>
      </View>
      <View style={styles.addressSide__container}>
        <Text>{data.addressNickName}</Text>
        <Text>
          {data.firstName} {data.lastName}
        </Text>
        <Text>{data.address}</Text>
        <Text>
          {data.city} {data.pincode}
        </Text>
        <Text>{data.mobileNum}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddressBox;
