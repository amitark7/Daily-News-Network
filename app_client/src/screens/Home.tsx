import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {newsContext} from '../contextNews/newsContext';
import Card from '../component/Card';
import {useIsFocused} from '@react-navigation/native';
import Separater from '../component/Separater';
import Header from '../component/Header';
import CategoryBar from '../component/CategoryBar';

const Home = () => {
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
  useEffect(()=>{
    setData('general')
  },[])

  return (
    <>
      <Header />
      <CategoryBar/>
      {news.length === 0 ? (
        <ActivityIndicator size={40} color={'black'} style={{marginTop: 20}} />
      ) : (
        <View style={styles.container}>
          {/* <Text style={styles.headerTxt}>Daily News Network -- Top Headlines</Text> */}
          
          <FlatList
            data={news}
            ItemSeparatorComponent={Separater}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}: any) => <Card item={item} />}
          />
        </View>
      )}
    </>
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
  categoryBarContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginBottom:10
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
