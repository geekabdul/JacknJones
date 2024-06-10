import {StyleSheet} from 'react-native';
import {BLACK, LIGHT_GREY, PRIMARY, PRIMARY_LIGHT} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    flex: 1,
    backgroundColor: 'white',
  },
  jacknjones__container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login__container: {
    flex: 1,
    padding: 20,
  },
  signUp__Text: {
    fontSize: 18,
    fontWeight: '700',
    color: PRIMARY,
  },
  login_inputsContainer: {
    marginVertical: 20,
  },
  input__container: {
    marginVertical: 20,
  },
  phoneOtp_Text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: BLACK,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBlockColor: LIGHT_GREY,
    padding: 10,
    fontSize: 18,
  },
  OTPnResend__container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputBox: {
    paddingVertical: 0,
    height: 70,
    width: '60%',
  },
  underlineStyleBase: {
    // width: 30,
    // height: 45,
    borderWidth: 2,
    borderRadius: 5,
    color: BLACK,
  },
  resendText: {color: PRIMARY_LIGHT, fontSize: 16},
});
