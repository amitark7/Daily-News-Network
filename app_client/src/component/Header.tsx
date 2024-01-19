import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  // const [ham, setHam] = useState<boolean>(false);
  // const [category, setCategory] = useState<string>('/');

  // const handleCatogery = (text: string) => {
  //   setCategory(text);
  //   setHam(!ham);
  // };
  return (
    <>
      <View style={styles.navbar}>
        <Text style={styles.headerTxt}>News Network</Text>
        <View style={styles.iconBox}>
          {/* {ham ? (
            <FontAwesome5
              onPress={() => setHam(!ham)}
              style={styles.icon}
              name="times"
              size={34}
            />
          ) : ( */}
            <Image
              source={{uri:'https://amitark7.github.io/Project-Images/NewsIcon.png'}}
              style={{width:45,height:30}}
            />
          {/* )} */}
        </View>
      </View>

      {/* Category List  */}
      {/* <View
        style={[styles.categoryContainer, {marginRight: ham ? '0%' : '-50%'}]}>
        <TouchableOpacity onPress={() => handleCatogery('/')}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCatogery('sports')}>
          <Text style={styles.text}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCatogery('science')}>
          <Text style={styles.text}>Science</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCatogery('health')}>
          <Text style={styles.text}>Health</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('technology')}>
          <Text style={styles.text}>Technology</Text>
        </TouchableOpacity>
      </View> */}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  navbar: {
    // height:40,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  headerTxt: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconBox: {
    padding: 5,
  },
  icon: {
    fontSize: 24,
    color: '#000',
  },
  categoryContainer: {
    // height: 200,
    // height: 200,
    width: 150,
    backgroundColor: '#000000',
    position: 'absolute',
    right: '0%',
    top: '7%',
    zIndex: 999,
    gap: 5,
  },
  text: {
    color: '#fff',
    margin: 10,
    textAlign: 'center',
  },
});
