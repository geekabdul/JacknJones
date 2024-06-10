import {StyleSheet} from 'react-native';
import {GOLDEN, LIGHT_GREY} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    borderTopWidth: 1,
    borderTopColor: LIGHT_GREY,
    marginTop: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productDetail: {marginLeft: 20, flex: 1},
  W400_S16: {
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
  },
  W400_S14: {
    fontWeight: '400',
    fontSize: 14,
    color: 'black',
  },
  W600_S14: {
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
  },
  status__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  statusText: {},
  packedText: {
    fontWeight: '600',
    fontSize: 11,
    color: GOLDEN,
  },
});
