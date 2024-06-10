import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import SecondaryHeader from '../../common/SecondaryHeader/SecondaryHeader';
import InputField from '../../common/InputField/InputField';
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

const Address = () => {
  const navigation = useNavigation();
  const [mobileNo, setMobileNo] = useState('( +91 ) 99116 18433');
  const [addressNickName, setAddressNickName] = useState('Rahmat');
  const [firstName, setFirstName] = useState('Rahmat');
  const [lastName, setLastName] = useState('Ali');
  const [pincode, setPincode] = useState('203913');
  const [city, setCity] = useState('Faridabad');
  const [Country, setCountry] = useState('India');
  const [state, setState] = useState('Uttar Pradesh');
  const [addressLine1, setAddressLine1] = useState('Lorem lipsum address');
  const [addressLine2, setAddressLine2] = useState('Lorem lipsum address');

  const handleSaveAddress = () => {
    navigation.push('CartAddress');
  };
  return (
    <>
      <View style={styles.main__container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SecondaryHeader headerTitle={'Address'} />
          <View style={styles.process__container}>
            <View style={styles.addressPaymentSuccess__container}>
              <Text style={styles.addressPaymentSuccess__blackText}>
                Address
              </Text>
              <Text style={styles.addressPaymentSuccess__greykText}>
                Payment
              </Text>
              <Text style={styles.addressPaymentSuccess__greykText}>
                Success
              </Text>
            </View>
            <View style={styles.dotsLines__container}>
              <View style={styles.blackDot__container} />
              <View style={styles.greyVerticalLine} />
              <View style={styles.greyDot__container} />
              <View style={styles.greyVerticalLine} />
              <View style={styles.greyDot__container} />
            </View>
          </View>
          <View style={styles.form__container}>
            <InputField
              label={'Phone Number'}
              value={mobileNo}
              setValue={setMobileNo}
            />
            <InputField
              label={'Address Nickname'}
              value={addressNickName}
              setValue={setAddressNickName}
            />
            <InputField
              label={'First Name'}
              value={firstName}
              setValue={setFirstName}
            />
            <InputField
              label={'Last Name'}
              value={lastName}
              setValue={setLastName}
            />
            <InputField
              label={'Pin Code'}
              value={pincode}
              setValue={setPincode}
            />
            <InputField label={'City'} value={city} setValue={setCity} />
            <InputField
              label={'Country'}
              value={Country}
              setValue={setCountry}
            />
            <InputField label={'State'} value={state} setValue={setState} />
            <InputField
              label={'Address Line 1'}
              value={addressLine1}
              setValue={setAddressLine1}
            />
            <InputField
              label={'Address Line 2'}
              value={addressLine2}
              setValue={setAddressLine2}
            />
          </View>
          {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Make as default address</Text>
          </View> */}
        </ScrollView>
      </View>
      <View style={styles.bottom__container}>
        <PrimaryButton
          btnTitle={'Save Address'}
          customStyle={styles.saveAddress__btn}
          handleBtn={handleSaveAddress}
        />
      </View>
    </>
  );
};

export default Address;
