import {StyleSheet} from 'react-native';
import {BLACK, LIGHT_GREY, WHITE} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    padding: 20,
    paddingVertical: 0,
    backgroundColor: WHITE,
    flex: 1,
  },
  storeHeading: {
    fontSize: 19,
    fontWeight: '600',
    color: BLACK,
  },
  horizontalLine: {
    height: 0.9,
    backgroundColor: LIGHT_GREY,
    marginVertical: 10,
  },
  productCards__container: {paddingBottom: 40},
});
