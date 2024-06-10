import {StyleSheet} from 'react-native';
import {LIGHT_GREY, PRIMARY, WHITE} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    flex: 1,
  },
  jacknJones__container: {
    flex: 1 / 3,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body__container: {flex: 1, padding: 20, backgroundColor: WHITE},
  about__container: {
    borderWidth: 1,
    borderColor: LIGHT_GREY,
  },
  about_subContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  defaultImage: {
    borderRadius: 999,
    height: 80,
    width: 80,
  },
  aboutContent__container: {
    marginLeft: 20,
    flex: 1,
  },
  aboutheading: {
    fontSize: 18,
    color: PRIMARY,
    fontWeight: '600',
  },
  aboutText: {
    fontSize: 17,
  },
  boxes__container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  box__container: {
    marginTop: 20,
  },
});
