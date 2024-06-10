import {StyleSheet} from 'react-native';
import {BLACK, LIGHT_GREY} from '../../values/Colors';

export default StyleSheet.create({
  Heading: {
    fontSize: 19,
    fontWeight: '600',
    color: BLACK,
  },
  horizontalLine: {
    marginVertical: 10,
    height: 1.2,
    width: '100%',
    backgroundColor: LIGHT_GREY,
  },
});
