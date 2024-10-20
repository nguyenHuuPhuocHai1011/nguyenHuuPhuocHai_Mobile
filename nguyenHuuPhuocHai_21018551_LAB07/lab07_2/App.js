import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React, {useEffect, useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo, AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';

const Item = ({item, onPress}) => {
  return(
    <View style = {styles.item_container}>
      <Image source = {item.img} style = {{width : 80, height : 80, borderRadius : 20, backgroundColor : 'white'}} />
      <View style = {styles.title_container}> 
        <Text>{item.title}</Text>
        <Text>{item.small_title}</Text>
        <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
          <Text>${item.price}</Text>
          <TouchableOpacity onPress = {onPress}><Entypo name="plus" size={24} color="black" /></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function ListScreen({navigation}){

  const [item, setItem] = useState(); // data goc
  const [filteredItem, setFilteredItem] = useState([]); // data duoc filter
  const [searchQuery, setSearchQuery] = useState(''); // tu khoa search
  const [selectedFilter, setSelectedFilter] = useState(''); // data filter hien tai

  useEffect(()=>{
    fetch('https://67038f17ab8a8f8927309d88.mockapi.io/donut')
      .then(response => response.json())
      .then(data => {
        setItem(data);
        setFilteredItem(data); // hien thi ban dau
        })
      .catch(error => console.error(error));
  }, [])

  // xu ly loc data khi nhap tu khoa or filter
  const filterData = (query, filter) => {
    let filteredList = item;
    // loc theo tim kiem (neu co)
    if(query){
      filteredList = filteredList.filter((i) => i.title.toLowerCase().includes(query.toLowerCase()));
    }
    // loc theo filter (neu co)
    if (filter) {
      filteredList = filteredList.filter((i) =>i.title.toLowerCase().includes(filter.toLowerCase()));
    }

    setFilteredItem(filteredList);
  }

  // xu ly khi thay doi tu khoa tim kiem
  const handleSearch = (text) => {
    setSearchQuery(text);
    filterData(text, selectedFilter);
  };

  // xu ly khi chon nut filter
  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
    filterData(searchQuery, filter);
  };

  const renderItem = ({item}) => {
    return(
      <Item
        item = {item}
        onPress={() => {
          navigation.navigate('Details', {
            img: item.img,
            title: item.title,
            small_title: item.small_title,
            price: item.price,
            delivery_time: item.delivery_time,
            restaurants_info: item.restaurants_info
          });
        }}
       />
    );
  }

  return(
    <View style = {styles.container}>

      <View style = {styles.head_list}>
        <Text style = {{marginLeft : 20, fontSize : 16}}>Welcome, Jala!</Text>
        <Text style = {{marginLeft : 20, fontSize : 20, fontWeight : 'bold'}}>Choice you Best food</Text>
      </View>

      <View style = {styles.search_filter_container}>
        <TextInput
          style = {styles.search_border}
          placeholder = "Search food"
          value = {searchQuery}
          onChangeText ={handleSearch}
        />

        <View style = {styles.filter_container}>
          <TouchableOpacity 
            style={[styles.filter_border, selectedFilter === 'Donut' && styles.selected_filter]}
            onPress={() => handleFilterPress('Donut')}>
            <Text>Donut</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.filter_border, selectedFilter === 'Pink Donut' && styles.selected_filter]}
            onPress={() => handleFilterPress('Pink Donut')}>
            <Text>Pink Donut</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.filter_border, selectedFilter === 'Floating' && styles.selected_filter]}
            onPress={() => handleFilterPress('Floating')}>
            <Text>Floating</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style = {styles.flatlist_container}>
        <FlatList 
          data = {filteredItem}
          renderItem = {renderItem}
          keyExtractor={(item) => item.id}
         />
      </View>
    </View>
  );
}

function DetailsScreen({ route}){

  
  const { img, title, small_title, price, delivery_time, restaurants_info } = route.params;
    const [quantity, setQuantity] = useState(1)
  const totalPrice = (quantity * price)

  return (
    <View style={styles.container}>
      <View style = {styles.image_detail}>
        <Image source={{ uri: img }} style={{ width: 250, height: 250 , borderRadius: 20,}} />
      </View>
      <View style = {styles.title_detail}>
        <Text style = {{marginLeft : 20, fontSize : 20, fontWeight : 'bold'}}>{title}</Text>
        <View style = {{flexDirection : 'row', justifyContent : 'space-between', width : '100%', alignItems : 'center'}}>
          <Text style = {{marginLeft : 20}}>{small_title}</Text>
          <Text style = {{marginRight : 20}}>${totalPrice}</Text>
        </View>
      </View>
      <View style = {{ flexDirection : 'row', justifyContent : 'space-around', width : "100%", alignItems : 'center'}}>
        <View>
          <Text>Delivery in</Text>
          <Text>{delivery_time} mins</Text>
        </View>
        <View style = {{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                      <TouchableOpacity 
                        style={{
                            width: 20,  
                            height: 20,  
                            borderRadius: 0,  
                            backgroundColor: '#ddd',  
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} 
                        onPress={() => {
                          if (quantity > 1) {  
                            setQuantity(quantity - 1)
                          }
                        }}
                      >
                          <Text style={{}}>-</Text>
                      </TouchableOpacity>
                      <Text style = {{fontSize: 15, marginHorizontal: 20}} >{quantity}</Text>
                      <TouchableOpacity 
                        style={{
                            width: 20,  
                            height: 20,  
                            borderRadius: 0,  
                            backgroundColor: '#ddd',  
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} 
                        onPress={() => {
                            setQuantity(quantity + 1)                         
                        }}
                      >
                          <Text style={{}}>+</Text>
                      </TouchableOpacity>

                  </View>
      </View>
      <View style = {{ marginTop : 20, padding : 10}}>
        <Text style = {{fontSize : 16,}}>Restaurant:</Text>
        <Text style = {{fontSize : 16,}}>{restaurants_info}</Text>
      </View>

      <TouchableOpacity style={styles.add_to_cart_button}>
        <Text style={{ color: 'white', fontSize : 20 }}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListScreen">
        <Stack.Screen name="ListScreen" component={ListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent : 'center',
    backgroundColor : 'white',
  },
  item_container:{
    flex : 1,
    backgroundColor : 'rgba(244, 221, 221, 1)',
    flexDirection : 'row',
    padding : 10,
    width : '100%',
    borderRadius : 20,
    marginBottom : 10,
    margin : 10, 
  },
  head_list : {
    flex : 0.75,
    justifyContent : 'space-around',
  },
  search_filter_container : {
    flex : 1.5,
    padding : 10,
    
  },
  search_border : {
    borderWidth : 1,
    borderColor : 'rgba(196, 196, 196, 1)',
    backgroundColor : 'rgba(196, 196, 196, 0.1)',
    color : 'rgba(196, 196, 196, 1)',
    paddingLeft : 10,
    width : "80%",
    height : 50,
  },
  flatlist_container : {
    flex : 5,
  },
  filter_container : {
    flexDirection : 'row',
    justifyContent : 'space-around',
  },
  filter_border : {
    borderWidth : 1,
    borderColor : 'rgba(0, 0, 0, 0.2)',
    backgroundColor : 'rgba(196, 196, 196, 0.17)', 
    width : 100,
    height : 40,
    marginTop : 20,
    alignItems : 'center',
    justifyContent : 'center',
  },
  title_container : {
    paddingLeft : 10,
    justifyContent : 'space-between',
    width : '70%',
  },
  add_to_cart_button: {
    backgroundColor: 'rgba(241, 176, 0, 1)',
    borderRadius: 10,
    alignItems: 'center',
    marginTop : 20,
    height : 50,
    justifyContent : 'center',
    fontWeight : 'bold',
    margin : 30,
  },
  image_detail : {
    alignItems : 'center',
    marginTop : 20,
  },
  title_detail : {
    marginTop : 20,
    marginBottom : 20,
  },
  selected_filter : {
    backgroundColor : 'rgba(241, 176, 0, 1)',
  }
});
