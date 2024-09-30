import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {Fontisto} from '@expo/vector-icons';
import {FontAwesome6} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';

const Item = ({item, onPress, backgroundColor}) =>{
  return(
    <TouchableOpacity onPress = {onPress} style = {[styles.items, {backgroundColor}]}>
    <Image source = {item.img} style = {{width : 120, height : 150}} />
    <Text numberOfLines={1} 
  ellipsizeMode="tail">{item.title}</Text>
    <View style = {{flexDirection : 'row'}}> 
      <Entypo name="star" size={20} color="yellow" />
      <Entypo name="star" size={20} color="yellow" />
      <Entypo name="star" size={20} color="yellow" />
      <Entypo name="star" size={20} color="yellow" />
      <Entypo name="star" size={20} color="gray" />
      <Text style = {{justifyContent : 'center', alignItems : 'center'}}>({item.rate})</Text>
    </View>
    <View style = {{flexDirection : ' row', justifyContent : 'space-evenly'}}>
    <Text>{item.price}00đ</Text>
    <Text style = {{color : 'gray'}}>({item.discountPrice}%)</Text>
    </View>
  </TouchableOpacity>
  );
}

const App = () => {
  const [selectedId, setSelectedId] = useState([]);

  const [item, setItem] = useState([]);
  useEffect(() => {
      fetch('https://66fa5713afc569e13a9b5271.mockapi.io/item_thiet_bi_dien')
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.error(error))
  },[])

  const renderItem = ({item}) =>{
    const backgroundColor = item.id === selectedId ? 'white' : 'white';

    return(
      <Item
        item = {item}
        onPress = {() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
      />
    )
  };



  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>
        <Feather name="arrow-left" size={24} color="black" style = {{marginLeft : 0}} />
        <View style = {{flexDirection : 'row'}}>
        <FontAwesome6 name="magnifying-glass" size={24} color="black" style = {{left : 30,top : 4}}  />
        <TextInput style = {styles.look} placeholder = 'Dây cáp usb' />
        </View>
        <MaterialCommunityIcons name="cart-check" size={24} color="black" style = {{marginRight : 0}} />
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </View>

      <View style = {styles.body}>
        <FlatList
        data={item}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns = '2'
      />
      </View>

      <View style = {styles.bottom}>
        <Feather name="menu" size={24} color="black" style = {{marginLeft : 10}} />
        <Ionicons name="home-outline" size={24} color="black" />
        <Fontisto name="arrow-return-left" size={24} color="black" style = {{marginRight : 10}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  items : {
    flexDirection : 'column',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 10,
    width : '45%',
    alignItems : 'center',

  },

  header : {
    flex : 1,
    backgroundColor : 'rgba(27, 169, 255, 1)',
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },

  body : {
    flex : 10,
  },

  bottom : {
    flex : 1,
    backgroundColor : 'rgba(27, 169, 255, 1)',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
  },

  look : {
    backgroundColor : 'white',
    width : 150,
    height : 30,
    paddingLeft : 35,
    justifyContent : 'center',
    alignItems : 'center'
  }
});

export default App;

