import {StyleSheet} from 'react-native';
import {BLACK, LIGHT_GREY, RED, WHITE} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    backgroundColor: WHITE,
    flex: 1,
    padding: 20,
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
    // backgroundColor: BLACK,

    borderWidth: 1,
    borderColor: LIGHT_GREY,
    borderRadius: 999,
  },
  blackVerticalLine: {height: 1, flex: 1, backgroundColor: BLACK},
  greyVerticalLine: {height: 1, flex: 1, backgroundColor: LIGHT_GREY},
  addresses__container: {marginTop: 20},
  Address_Text: {
    fontWeight: '600',
    fontSize: 11,
  },
  addresses__subContainer: {marginVertical: 10},
  addNewAddress__container: {
    borderWidth: 1,
    borderColor: LIGHT_GREY,
    padding: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addNewAddress__text: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 11,
    color: BLACK,
  },
  TotalnPlaceOrder__container: {marginVertical: 20},
  price_container: {padding: 10},
  W400S16: {
    fontWeight: '400',
    fontSize: 16,
  },
  total_mrp: {fontWeight: '700', fontSize: 16, color: BLACK},
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  placeOrder__btn: {backgroundColor: RED, borderRadius: 0},
});
