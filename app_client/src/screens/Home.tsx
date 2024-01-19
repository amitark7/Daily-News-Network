import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {newsContext} from '../contextNews/newsContext';
import Card from '../component/Card';
import { useIsFocused } from '@react-navigation/native';

const Home = () => {
  const {news, setData} = useContext(newsContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused){
      setData('technology');
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerTxt}>Daily News Network -- Top Headlines</Text> */}
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: any) => <Card item={item} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    paddingHorizontal: 12,
  },
});
