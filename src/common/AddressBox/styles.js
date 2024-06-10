import {StyleSheet} from 'react-native';
import {LIGHT_GREY, PRIMARY_LIGHT} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    marginVertical: 5,
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
  },
  radioOuter__container: {
    marginTop: 2,
    borderWidth: 1,
    borderColor: LIGHT_GREY,
    padding: 3,
    borderRadius: 999,
  },
  selectedRadioOuter__container: {
    marginTop: 2,
    borderWidth: 1,
    borderColor: PRIMARY_LIGHT,
    padding: 3,
    borderRadius: 999,
  },
  radioInner__container: {
    height: 10,
    width: 10,
    borderRadius: 999,
  },
  selectedradioInner__container: {
    height: 10,
    width: 10,
    backgroundColor: PRIMARY_LIGHT,
    borderRadius: 999,
  },
  addressSide__container: {marginLeft: 10},
});
