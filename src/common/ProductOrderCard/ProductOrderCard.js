import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductOrderCard = ({data}) => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <View style={styles.main__container}>
      <Image source={data.img} style={styles.img} />
      <View style={styles.productDetail}>
        <View style={styles.nameClose__container}>
          <Text style={styles.productName}>{data.productName}</Text>
          <AntDesign name="close" size={20} />
        </View>
        <Text style={styles.mrp}>
          MRP: <Text style={styles.mrpPrice}>{data.mrp}</Text>
        </Text>
        <Text style={styles.isAvailable}>{data.isAvailable}</Text>
        <View style={styles.removeWishlistCount__container}>
          <View style={styles.removeWishList__container}>
            <Text style={styles.removeText}>Remove</Text>

            <Text style={styles.wishlistText}>Wishlist</Text>
          </View>
          <View style={styles.counter__container}>
            <View style={styles.counter__SubContainer}>
              <View
                style={styles.incrementDecrement__container}
                onTouchEnd={decrement}>
                <Text style={styles.incrementDecrement}>-</Text>
              </View>
              <Text style={styles.count}>{counter}</Text>
              <View
                style={styles.incrementDecrement__container}
                onTouchEnd={increment}>
                <Text style={styles.incrementDecrement}>+</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductOrderCard;
