import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import AddressBox from '../../common/AddressBox/AddressBox';
import Entypo from 'react-native-vector-icons/Entypo';
import {BLACK} from '../../values/Colors';
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton';
import SecondaryHeader from '../../common/SecondaryHeader/SecondaryHeader';
const addressesData = [
  {
    id: '1',
    addressNickName: 'Rahmat',
    firstName: 'Rahmat',
    lastName: 'Ali',
    city: 'Faridabad',
    pincode: '12330',
    address: 'Address loram ipsum',
    mobileNum: '9876543210',
  },
  {
    id: '2',
    addressNickName: 'Rahmat',
    firstName: 'Rahmat',
    lastName: 'Ali',
    city: 'Faridabad',
    pincode: '12330',
    address: 'Address loram ipsum',
    mobileNum: '9876543210',
  },
];
const CartAddress = () => {
  const navigation = useNavigation();
  const handleAddNewAddress = () => {
    navigation.navigate('Address');
  };
  const handlePlaceHolder = () => {
    navigation.navigate('Successfull');
  };
  const [selectedAddress, setSelectedAddress] = useState('1');

  return (
    <View style={styles.main__container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SecondaryHeader headerTitle={'CartOrder'} />
        <View style={styles.process__container}>
          <View style={styles.addressPaymentSuccess__container}>
            <Text style={styles.addressPaymentSuccess__blackText}>Address</Text>
            <Text style={styles.addressPaymentSuccess__greykText}>Payment</Text>
            <Text style={styles.addressPaymentSuccess__greykText}>Success</Text>
          </View>
          <View style={styles.dotsLines__container}>
            <View style={styles.blackDot__container} />
            <View style={styles.greyVerticalLine} />
            <View style={styles.greyDot__container} />
            <View style={styles.greyVerticalLine} />
            <View style={styles.greyDot__container} />
          </View>
        </View>
        <View style={styles.addresses__container}>
          <Text style={styles.Address_Text}>ADDRESS</Text>
          <View style={styles.addresses__subContainer}>
            {addressesData?.map(address => (
              <AddressBox
                data={address}
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
              />
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.addNewAddress__container}
          onPress={handleAddNewAddress}>
          <Entypo name="plus" size={11} color={BLACK} />
          <Text style={styles.addNewAddress__text}>Add New Address</Text>
        </TouchableOpacity>

        <View style={styles.TotalnPlaceOrder__container}>
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
      </ScrollView>
    </View>
  );
};

export default CartAddress;
