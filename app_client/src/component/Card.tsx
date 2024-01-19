import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Card = ({item}:any) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : 'https://amitark7.github.io/Project-Images/breakingNews.jpeg',
        }}
        style={styles.img}
      />
      <View style={styles.cardBody}>
        <TouchableOpacity onPress={() => Linking.openURL(`${item.url}`)}>
          <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
        <Text style={styles.cardDesc}>{item.description}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card:{
    margin:20,
    borderColor:'lightgrey',
    borderRadius:12,
    borderWidth:1
  },
  img:{
    height:220,
    borderTopLeftRadius:12,
    borderTopRightRadius:12
  },
  cardBody:{
    padding:10,
    paddingVertical:16
  },
  cardTitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'#000000',
    marginBottom:4
  },
  cardDesc:{
    fontSize:14
  }
});
