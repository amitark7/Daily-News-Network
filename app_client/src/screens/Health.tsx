import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import Card from '../component/Card';
import {newsContext} from '../contextNews/newsContext';
import {useIsFocused,useRoute} from '@react-navigation/native';
import Separater from '../component/Separater';

const Health = () => {
  const {news, setData} = useContext(newsContext);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      setData('health');
    }
  }, [isFocused]);
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

export default Health;

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
