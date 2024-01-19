import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Card = ({item}: any) => {
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
          <Text numberOfLines={3} style={styles.cardTitle}>
            {item.title}
          </Text>
        </TouchableOpacity>
        <Text numberOfLines={4} style={styles.cardDesc}>
          {item.description
            ? item.description
            : 'News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events. News is sometimes called "hard news" to differentiate it from soft media.'}
        </Text>
      </View>
      <View style={styles.extra}>
        <Text style={styles.authorTxt}>
          {item.author ? item.author.substring(0, 9):'News Network'}
        </Text>
        <Text style={styles.time}>{'* '+item.publishedAt.substring(12, 19)}</Text>
      </View>
      <View style={styles.source}>
        <Text style={styles.sourceTxt}>{item.source.name}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 20,
    // borderColor: 'lightgrey',
    // borderRadius: 12,
    // borderWidth: 1,
    position:'relative'
  },
  img: {
    height: 220,
    // borderTopLeftRadius: 12,
    // borderTopRightRadius: 12,
  },
  cardBody: {
    paddingVertical: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 14,
  },
  extra: {
    flexDirection: 'row',
  },
  authorTxt: {
    fontSize: 13,
    marginRight: 4,
  },
  time: {
    fontSize: 12,
  },
  source: {
    position:'absolute',
    top:'-2%',
    right:'-2%',
    backgroundColor:'#FF3E4D',
    paddingVertical:2,
    paddingHorizontal:14,
    borderRadius:20
  },
  sourceTxt: {
    color:'#fff'
  },
});
