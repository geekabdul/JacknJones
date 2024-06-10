import {StyleSheet} from 'react-native';
import {BLACK, WHITE} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    backgroundColor: WHITE,
    flex: 1,
    padding: 20,
  },

  yourOrderText: {
    fontSize: 11,
    fontWeight: '600',
  },
  //   productCards__container: {paddingBottom:},
  delivery__container: {
    borderWidth: 1,
    borderColor: '#EBEBEB',
    marginVertical: 5,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  delivery__title: {fontWeight: '500', fontSize: 12, color: BLACK},
  delivery__subTitle: {fontSize: 8, fontWeight: '400'},
});
