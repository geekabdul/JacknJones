import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {FlatList} from 'react-native';

import Header from '../../common/Header/Header';
import SearchBar from '../../common/SearchBar/SearchBar';
import StoreCard from '../../common/StoreCard/StoreCard';

const data = [
  {
    img: require('../../assets/image/1.png'),
    name: 'Ambience Mall Gurgaon',
    type: ['Man', 'Women', 'Kids'],
    Loction: 'Haryana',
    distance: '6 KM',
    Size: 'M',
    isOpen: true,
  },
  {
    img: require('../../assets/image/1.png'),
    name: 'Ambience Mall Gurgaon',
    type: ['Man', 'Women', 'Kids'],
    Loction: 'Haryana',
    distance: '6 KM',
    Size: 'M',
    isOpen: true,
  },
  {
    img: require('../../assets/image/1.png'),
    name: 'Ambience Mall Gurgaon',
    type: ['Man', 'Women', 'Kids'],
    Loction: 'Haryana',
    distance: '6 KM',
    Size: 'M',
    isOpen: true,
  },
  {
    img: require('../../assets/image/1.png'),
    name: 'Ambience Mall Gurgaon',
    type: ['Man', 'Women', 'Kids'],
    Loction: 'Haryana',
    distance: '6 KM',
    Size: 'M',
    isOpen: true,
  },
  {
    img: require('../../assets/image/1.png'),
    name: 'Ambience Mall Gurgaon',
    type: ['Man', 'Women', 'Kids'],
    Loction: 'Haryana',
    distance: '6 KM',
    Size: 'M',
    isOpen: true,
  },
  {
    img: require('../../assets/image/1.png'),
    name: 'Ambience Mall Gurgaon',
    type: ['Man', 'Women', 'Kids'],
    Loction: 'Haryana',
    distance: '6 KM',
    Size: 'M',
    isOpen: true,
  },
  {
    img: require('../../assets/image/1.png'),
    name: 'Ambience Mall Gurgaon',
    type: ['Man', 'Women', 'Kids'],
    Loction: 'Haryana',
    distance: '6 KM',
    Size: 'M',
    isOpen: true,
  },
  {
    img: require('../../assets/image/1.png'),
    name: 'Ambience Mall Gurgaon',
    type: ['Man', 'Women', 'Kids'],
    Loction: 'Haryana',
    distance: '6 KM',
    Size: 'M',
    isOpen: true,
  },
];
const Mystore = () => {
  return (
    <>
      <Header />
      <View style={styles.main__container}>
        <Text>The stock of our store may vary</Text>
        <Text style={styles.storeHeading}>Store</Text>
        <SearchBar placeholder={'Find Store'} />
        <View style={{marginVertical: 10}}>
          <Image
            source={require('../../assets/image/mapImg.png')}
            style={{width: '100%', height: 160}}
          />
          <View style={styles.horizontalLine} />
          <View style={{paddingBottom: 470}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              key={item => Math.round()}
              renderItem={({item, index}) => <StoreCard item={item} />}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Mystore;
