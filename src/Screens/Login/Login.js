import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton';
import {PRIMARY} from '../../values/Colors';
const Login = () => {
  const navigation = useNavigation();
  const [number, onChangeNumber] = React.useState('');
  const handleCodeChange = code => {
    console.log('otp', code);
  };
  const handleLogin = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.main__container}>
      <View style={styles.jacknjones__container}>
        <Image source={require('../../assets/image/jacknkones.png')} />
      </View>
      <View style={styles.login__container}>
        <Text style={styles.signUp__Text}>SignUp</Text>
        <View style={styles.login_inputsContainer}>
          <View style={styles.input__container}>
            <Text style={styles.phoneOtp_Text}>Phone No</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="+91 99116 18433"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.input__container}>
            <Text style={styles.phoneOtp_Text}>Verify OTP</Text>
            <View style={styles.OTPnResend__container}>
              <OTPInputView
                style={styles.inputBox}
                pinCount={4}
                onCodeChanged={handleCodeChange}
                autoFocusOnLoad={false}
                codeInputFieldStyle={styles.underlineStyleBase}
              />
              <Text style={styles.resendText}>Resend</Text>
            </View>
          </View>
        </View>
        <View>
          <PrimaryButton
            btnTitle={'Login'}
            handleBtn={handleLogin}
            customStyle={{backgroundColor: PRIMARY}}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
