import {StyleSheet} from 'react-native';
import {GREEN, WHITE} from '../../values/Colors';

export default StyleSheet.create({
  main__container: {
    backgroundColor: WHITE,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBordreLine__container: {
    borderWidth: 1.5,
    borderColor: GREEN,
    padding: 20,
    borderRadius: 999,
    marginVertical: 10,
  },
  checkCircle__container: {
    backgroundColor: GREEN,
    borderRadius: 999,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SuccessfullText: {fontSize: 19, fontWeight: '600', color: GREEN},
  successfullNote__Text: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '400',
    width: '70%',
    marginVertical: 5,
  },
});
