import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const data = [
  {img: require('../../assets/image/orderbox.png')},
  {img: require('../../assets/image/Discoverybox.png')},
  {img: require('../../assets/image/mystorebox.png')},
];
const Home = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('BottomTab');
  };

  return (
    <View style={styles.main__container}>
      <View style={styles.jacknJones__container}>
        <Image
          source={require('../../assets/image/jacknJones_secondary.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.body__container}>
        <View style={styles.about__container}>
          <View style={styles.about_subContainer}>
            <Image
              source={require('../../assets/image/default.jpeg')}
              style={styles.defaultImage}
            />
            <View style={styles.aboutContent__container}>
              <Text style={styles.aboutheading}>Ambience Mall Gurgaon</Text>
              <Text style={styles.aboutText}>Location: Haryana</Text>
              <Text style={styles.aboutText}>Woman | Man | Kids</Text>
            </View>
          </View>
        </View>
        <View style={styles.boxes__container}>
          {data?.map((el, i) => (
            <TouchableOpacity
              style={[
                styles.box__container,
                {marginRight: i % 2 == 0 ? 20 : 0},
              ]}
              onPress={handleNavigate}>
              <Image source={el.img} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Home;
