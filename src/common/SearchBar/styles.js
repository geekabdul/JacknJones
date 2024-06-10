import {StyleSheet} from 'react-native';
import {LIGHT_GREY} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {},
  search__container: {
    borderWidth: 1,
    borderColor: LIGHT_GREY,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 18,
    width: '80%',
    // backgroundColor: 'red',
  },
});
