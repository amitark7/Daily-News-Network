import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {newsContext} from '../contextNews/newsContext';

const CategoryBar = () => {
  const {news, setData} = useContext(newsContext);
  const [category, setCategory] = useState([
    'Home',
    'science',
    'sports',
    'business',
    'health',
    'entertainment',
    'technology',
  ]);
  const [selectCategory, setSelectedCategory] = useState('Home');
  return (
    <FlatList
      style={styles.categoryBarContainer}
      horizontal
      data={category}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[styles.categoryBar]}
          onPress={() => {
            setSelectedCategory(item);
            if (item === 'Home') {
              setData('general');
            } else {
              setData(item);
            }
          }}>
          <Text
            style={[
              styles.categoryBarTxt,
              {
                color: selectCategory === item ? '#000' : '#99AAAB',
                borderBottomColor: selectCategory === item ? '#000' : '',
                borderBottomWidth: selectCategory === item ? 4 : 0,
              },
            ]}>
            {item.toLocaleUpperCase()}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryBar;

const styles = StyleSheet.create({
  categoryBarContainer: {
    backgroundColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginBottom: 10,
  },
  categoryBar: {
    marginHorizontal: 10,
    // height:60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBarTxt: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    paddingVertical: 18,
  },
});
