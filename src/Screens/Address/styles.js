import {StyleSheet} from 'react-native';
import {BLACK, LIGHTER_GREY, LIGHT_GREY, RED, WHITE} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    backgroundColor: WHITE,
    flex: 1,
    padding: 20,
    paddingBottom: 90,
  },
  process__container: {alignItems: 'center'},
  addressPaymentSuccess__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 2,
  },
  addressPaymentSuccess__blackText: {
    fontWeight: '600',
    fontSize: 12,
    color: BLACK,
  },
  addressPaymentSuccess__greykText: {
    fontWeight: '600',
    fontSize: 12,
    color: LIGHT_GREY,
  },
  dotsLines__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    marginVertical: 2,
  },
  blackDot__container: {
    height: 10,
    width: 10,
    backgroundColor: BLACK,
    borderRadius: 999,
  },
  greyDot__container: {
    height: 10,
    width: 10,
    borderWidth: 1,
    borderColor: LIGHT_GREY,
    borderRadius: 999,
  },
  blackVerticalLine: {height: 1, flex: 1, backgroundColor: BLACK},
  greyVerticalLine: {height: 1, flex: 1, backgroundColor: LIGHT_GREY},
  form__container: {
    marginTop: 10,
  },
  bottom__container: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    bottom: 0,
    elevation: 5,
    padding: 20,
    borderTopWidth: 2,
    borderTopColor: LIGHTER_GREY,
  },
  saveAddress__btn: {backgroundColor: RED, borderRadius: 0},
});
