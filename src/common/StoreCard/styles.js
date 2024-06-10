import {StyleSheet} from 'react-native';
import {BLACK, DARK_GREY, LIGHT_GREY, PRIMARY} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    borderColor: LIGHT_GREY,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {width: 80, height: 85},
  storeDetails__container: {marginLeft: 20},

  cardText: {
    color: PRIMARY,
    fontSize: 14,
    fontWeight: '600',
  },
  MrpText: {
    color: DARK_GREY,
    fontSize: 11,
    fontWeight: '400',
  },
  PriceText: {
    color: BLACK,
    fontSize: 12,
    fontWeight: '600',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '68%',
  },
});
