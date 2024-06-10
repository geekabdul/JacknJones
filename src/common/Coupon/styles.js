import {Dimensions, StyleSheet} from 'react-native';
import {BLACK, LIGHT_GREY, PRIMARY_LIGHT, RED} from '../../values/Colors';

const {width} = Dimensions.get('screen');
export default StyleSheet.create({
  main__container: {
    borderWidth: 1,
    borderColor: LIGHT_GREY,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image__container: {
    width: width / 4,
  },
  discount__type: {fontSize: 7, fontWeight: '600'},
  discount_percent: {
    fontSize: 14.67,
    fontWeight: '600',
    color: BLACK,
    marginVertical: 5,
  },
  rowcenterspacebetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  couponCode__container: {
    borderWidth: 1,
    borderColor: LIGHT_GREY,
    borderStyle: 'dotted',
    padding: 5,
  },
  couponCode: {
    fontSize: 8,
    fontWeight: '600',
    color: BLACK,
    marginHorizontal: 5,
  },
  expireIn: {fontSize: 8, fontWeight: '500', color: RED},
  new__container: {
    position: 'absolute',
    right: -1,
    top: -1,
    backgroundColor: PRIMARY_LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  newText: {fontSize: 9, fontWeight: '500', color: 'white'},
});
