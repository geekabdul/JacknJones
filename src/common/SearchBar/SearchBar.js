import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = ({placeholder}) => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.main__container}>
      <View style={styles.search__container}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <AntDesign name="search1" size={25} />
      </View>
    </View>
  );
};

export default SearchBar;
