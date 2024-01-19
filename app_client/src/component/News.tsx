import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const News = () => {

  const[news,setNews]=useState([])

  const fetchNews=async ()=>{
    const country='in';
    const category='business';

    const response=await fetch(`http://192.168.23.167:8080/news`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({category:category,country:country})
    })
    const data=await response.json()
    setNews(data.articles);
  }

  useEffect(()=>{
    fetchNews()
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>Daily News Network -- Top Headlines</Text>
      <FlatList
      data={news}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item}:any)=>(
        <View style={styles.card}>
          <Image source={{uri:item.urlToImage?item.urlToImage:'https://amitark7.github.io/Project-Images/breakingNews.jpeg'}} style={styles.img}/>
          <View style={styles.cardBody}>
            <TouchableOpacity onPress={()=>Linking.openURL(`${item.url}`)}><Text style={styles.cardTitle}>{item.title}</Text></TouchableOpacity>
            <Text style={styles.cardDesc}>{item.description}</Text>
          </View>
        </View>
      )}
      />
    </View>
  )
}

export default News

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  headerTxt:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
    marginTop:20,
    paddingHorizontal:12
  },
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
})