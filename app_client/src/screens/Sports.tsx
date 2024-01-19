import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useContext, useEffect } from 'react';
import Card from '../component/Card';
import { newsContext } from '../contextNews/newsContext';
import { useIsFocused } from '@react-navigation/native';
import Separater from '../component/Separater';

const Sports = () => {
  const {news,setData}=useContext(newsContext)

  let isFocused=useIsFocused()

  useEffect(()=>{
    if(isFocused){

      setData('sports')
    }
  },[isFocused])
  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerTxt}>Daily News Network -- Top Headlines</Text> */}
      <FlatList
        data={news}
        ItemSeparatorComponent={Separater}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: any) => <Card item={item} />}
      />
    </View>
  );
};

export default Sports;

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
