import {Dimensions, StyleSheet} from 'react-native';
import {BLACK, LIGHT_GREY, RED, WHITE} from '../../values/Colors';

const {width} = Dimensions.get('screen');
export default StyleSheet.create({
  main__container: {
    borderWidth: 1,
    borderColor: LIGHT_GREY,
    marginRight: 20,
    padding: 5,
    width: width / 3.1,
  },
  content__container: {alignItems: 'center'},

  couponTypeText: {
    marginTop: 10,
    fontWeight: '600',
    fontSize: 7,
    color: RED,
  },
  discount_percentText: {fontWeight: '600', fontSize: 31.18, color: BLACK},
  OFFText: {
    marginTop: -10,
    fontWeight: '300',
    fontSize: 31.18,
    color: BLACK,
  },
  couponValidityText: {fontWeight: '600', fontSize: 7, marginVertical: 8},
  redeemBtn__container: {
    backgroundColor: RED,
    borderRadius: 0,
    paddingVertical: 8,
  },
  redeemBtn__Text: {fontWeight: '500', fontSize: 10.16},
  leftHalfCircle: {
    position: 'absolute',
    bottom: 50,
    left: -30,
    width: 40,
    height: 30,
    borderRadius: 999,
    borderRightWidth: 1,
    borderColor: LIGHT_GREY,
    backgroundColor: WHITE,
  },
  rightHalfCircle: {
    position: 'absolute',
    bottom: 50,
    right: -30,
    width: 40,
    height: 30,
    borderRadius: 999,
    borderLeftWidth: 1,
    borderColor: LIGHT_GREY,
    backgroundColor: WHITE,
  },
});
