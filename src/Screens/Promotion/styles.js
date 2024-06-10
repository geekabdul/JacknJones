import {StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    backgroundColor: WHITE,
    flex: 1,
    padding: 20,
  },
  myCoupons__container: {
    marginTop: 10,
  },
  myCouponsText: {
    fontSize: 14,
    fontWeight: '600',
    color: BLACK,
  },
  myCoupons__subContainer: {marginVertical: 20},
  coupons__container: {marginVertical: 10},
});
