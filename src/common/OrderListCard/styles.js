import {StyleSheet} from 'react-native';
import {BLACK, GOLDEN, LIGHT_GREY} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GREY,
    paddingBottom: 20,
  },
  date: {
    alignSelf: 'flex-end',
    marginBottom: -5,
    marginTop: 5,
    fontSize: 12,
    fontWeight: '700',
    color: BLACK,
  },
  container: {flexDirection: 'row', alignItems: 'center'},
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
  },
  statusText: {},
  packedText: {
    fontWeight: '600',
    fontSize: 11,
    color: GOLDEN,
  },
});
