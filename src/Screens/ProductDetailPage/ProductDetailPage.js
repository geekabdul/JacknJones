import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../common/Header/Header';
import {ImageSlider} from '@pembajak/react-native-image-slider-banner';
import styles from './styles';
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
const Images = [
  {
    img: 'https://images.bestsellerclothing.in/data/JJ/march-30-2022/159478501_g2.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto',
  },
  {
    img: 'https://images.bestsellerclothing.in/data/JJ/march-30-2022/159478501_g2.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto',
  },
  {
    img: 'https://images.bestsellerclothing.in/data/JJ/march-30-2022/159478501_g2.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto',
  },
  {
    img: 'https://images.bestsellerclothing.in/data/JJ/march-30-2022/159478501_g2.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto',
  },
  {
    img: 'https://images.bestsellerclothing.in/data/JJ/march-30-2022/159478501_g2.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto',
  },
];

const ProductDetailPage = () => {
  const navigation = useNavigation();
  const handleStoreAvailability = () => {
    navigation.navigate('Mystore');
  };
  return (
    <>
      <Header />
      <View style={styles.main__container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <ImageSlider
              data={Images}
              preview={false}
              caroselImageContainerStyle={styles.caroselImageContainerStyle}
              caroselImageStyle={styles.caroselImageStyle}
              inActiveIndicatorStyle={styles.inActiveIndicatorStyle}
              activeIndicatorStyle={styles.activeIndicatorStyle}
              indicatorContainerStyle={styles.indicatorContainerStyle}
            />
          </View>

          <View style={styles.body__container}>
            <Text style={styles.W400S18}>
              Blue Logo Print Crew Neck T-shirt
            </Text>
            <Text style={styles.productPrice}>₹2000</Text>

            <View style={styles.selectSizes__container}>
              <Text style={styles.selectSize__Text}>Select Size</Text>
              <View style={styles.selectSizes__Subcontainer}>
                {['S', 'M', 'L', 'XL'].map(size => (
                  <TouchableOpacity style={styles.size__container}>
                    <Text>{size}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.buttons__container}>
        <View style={styles.buttons__subContainer}>
          <PrimaryButton
            btnTitle={'Add to Cart'}
            customStyle={styles.AddtoCartBtn}
          />
        </View>
        <View style={styles.buttons__subContainer}>
          <PrimaryButton
            btnTitle={'Store Availability'}
            customStyle={styles.StoreAvailability}
            handleBtn={handleStoreAvailability}
          />
        </View>
      </View>
    </>
  );
};

export default ProductDetailPage;
