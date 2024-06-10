import {StyleSheet} from 'react-native';
import {BLACK, DARK_GREY, LIGHT_GREY} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    borderColor: LIGHT_GREY,
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  img: {
    height: 80,
    width: 80,
  },
  productDetail: {marginLeft: 20, flex: 1},
  productName: {
    fontWeight: '400',
    color: 'black',
  },
  nameClose__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mrp: {
    fontWeight: '400',
    fontSize: 12,
    color: 'black',
    marginVertical: 2,
  },
  mrpPrice: {
    fontWeight: '600',
    fontSize: 12,
    color: 'black',
  },
  isAvailable: {
    fontWeight: '400',
    fontSize: 9,
  },
  removeWishlistCount__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  removeWishList__container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1 / 1.9,
  },
  removeText: {
    fontWeight: '700',
    fontSize: 9,
    color: BLACK,
  },
  wishlistText: {
    fontWeight: '700',
    fontSize: 9,
    color: DARK_GREY,
  },
  counter__container: {flex: 1, alignItems: 'flex-end'},
  counter__SubContainer: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  incrementDecrement__container: {
    borderWidth: 1,
    borderColor: LIGHT_GREY,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incrementDecrement: {},
  count: {
    fontWeight: '700',
  },
});
