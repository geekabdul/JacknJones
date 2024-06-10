import {StyleSheet} from 'react-native';
import {BLACK, DARK_GREY, LIGHT_GREY} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {marginVertical: 10},
  labelText: {
    fontSize: 14,
    fontWeight: '600',
    color: BLACK,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GREY,
    padding: 10,
    fontSize: 16,
    color: DARK_GREY,
    marginBottom: 10,
  },
});
