import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackProp } from '../App'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


type SplashProp=NativeStackScreenProps<StackProp,'Splash'>

const Splash = ({navigation}:SplashProp) => {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('HomeTab')
    },2000)
  },[])
  return (
    <View style={styles.container}>
      <Image
      style={styles.img}
      source={{uri:'https://amitark7.github.io/Project-Images/NewsFullLogo.png'}}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20
  },
  img:{
    height:250,
    width:300,
    objectFit:'contain',
  }
})