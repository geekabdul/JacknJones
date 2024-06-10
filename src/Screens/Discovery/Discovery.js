import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Discovery = () => {
  const navigation = useNavigation();

  const screens = ['OrderReceived', 'CartOrder', 'OrderList'];
  return (
    <View style={{padding: 20}}>
      <Text style={{marginBottom: 20}}>Click to navigate screen</Text>
      {screens?.map(screen => (
        <Text
          style={{color: 'blue', marginVertical: 10}}
          onPress={() => navigation.navigate(screen)}>
          {screen}
        </Text>
      ))}
    </View>
  );
};

export default Discovery;
