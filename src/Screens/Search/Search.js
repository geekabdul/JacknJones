import {View, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../common/Header/Header';
import styles from './styles';
import SearchBar from '../../common/SearchBar/SearchBar';
import ProductCard from '../../common/ProductCard/ProductCard';

const productData = [
  {
    productName: 'Black T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/1.png'),
  },
  {
    productName: 'Crew Neck T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/2.png'),
  },
  {
    productName: 'Green T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/3.png'),
  },
  {
    productName: 'Black T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/1.png'),
  },
  {
    productName: 'Crew Neck T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/2.png'),
  },
  {
    productName: 'Green T-Shirts',
    mrp: '800',
    isAvailable: 'In Stock',
    img: require('../../assets/image/3.png'),
  },
];
const Search = () => {
  return (
    <>
      <Header />
      <View style={styles.main__container}>
        <SearchBar placeholder={'Black Denim'} />
        <ScrollView
          style={styles.productCards__container}
          showsVerticalScrollIndicator={false}>
          {productData?.map((product, index) => (
            <ProductCard data={product} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Search;
