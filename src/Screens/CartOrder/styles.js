import {StyleSheet} from 'react-native';
import {
  BLACK,
  DARK_GREY,
  LIGHTER_GREY,
  LIGHT_GREY,
  RED,
  WHITE,
} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    backgroundColor: WHITE,
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 280,
  },
  scrollView__container: {paddingVertical: 20},
  yourOrderText: {
    fontSize: 11,
    fontWeight: '600',
  },
  productCards__container: {paddingBottom: 40},
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
  applyCoupon__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  InputApply__container: {
    flex: 1,
    borderWidth: 1,
    borderColor: LIGHT_GREY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    fontSize: 15,
    padding: 0,
    flex: 1,
    color: DARK_GREY,
  },

  applyBtn: {
    backgroundColor: RED,
    borderRadius: 0,
    paddingHorizontal: 25,
  },
  coupon__container: {
    borderRadius: 0,
    paddingHorizontal: 10,
  },
  couponText: {fontSize: 14, fontWeight: '700', color: 'black'},
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
