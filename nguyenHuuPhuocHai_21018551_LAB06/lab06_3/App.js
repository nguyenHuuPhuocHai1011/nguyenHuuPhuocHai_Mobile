import React , { useState } from "react";
import {Text, View, Image, Button, TouchableOpacity, StyleSheet, SafeAreaView, FlatList} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Entypo} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';

const bikeInfo = [
  {
    id:"1",
    title:"Pinarello",
    price:1800,
    img: require("./assets/bifour_-removebg-preview.png"),
    description : "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
  },
  {
    id:"2",
    title:"Pina Mountai",
    price:1700,
    img: require("./assets/bione-removebg-preview.png"),
    description : "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
  },
  {
    id:"3",
    title:"Pina Bike",
    price:1500,
    img: require("./assets/bithree_removebg-preview.png"),
    description : "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
  },
  {
    id:"4",
    title:"Pinarello",
    price:1900,
    img: require("./assets/bitwo-removebg-preview.png"),
    description : "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
  },
  {
    id:"5",
    title:"Pinarello",
    price:1800,
    img: require("./assets/bifour_-removebg-preview.png"),
    description : "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
  },
  {
    id:"6",
    title:"Pinarello",
    price:1800,
    img: require("./assets/bifour_-removebg-preview.png"),
    description : "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."
  },
]

const Item = ({item, backgroundColor, onPress}) =>{

    return(
      <TouchableOpacity style={[styles.item, { backgroundColor }]} onPress={onPress}>
        <Image source = {item.img} style = {{width : 105, height : 100,}} />
        <Text>{item.title}</Text>
        <Text>$ {item.price}</Text>
    </TouchableOpacity>
    );
  
}

function HomeScreen({navigation, route}){
  const [selectedId] = useState(bikeInfo.find(bike => bike.id === "1"));
  return(
    <View style = {styles.container}>

        <View style = {{flex : 1, justifyContent : 'flex-end', alignItems : 'center'}}>
            <Text style = {{fontSize : 18, textAlign : 'center', width : '80%'}}>A premium online store for sporter and their stylish choice</Text>
        </View>

        <View style = {{flex : 3, justifyContent : 'flex-end', alignItems : 'center', backgroundColor : 'rgba(233, 65, 65, 0.1)', width : '90%', height : '90%', borderRadius : 50, marginTop : 20,}}>
            <Image source={selectedId.img} style = {{width : 220, height : 205, marginBottom : 20,}} />
        </View>

        <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <Text style = {{fontSize : 20, fontWeight : 'bold',textAlign : 'center', width : "70%"}}>POWER BIKE SHOP</Text>
        </View>

        <View style = {{flex : 1, justifyContent : 'center', width : '100%', alignItems : 'center'}}>
              <TouchableOpacity style = {{backgroundColor : 'red', width : '80%', height : 50, alignItems : 'center', justifyContent :'center', borderRadius : 50,}}
              onPress={() => navigation.navigate('List')}
              >
                  <Text style = {{fontSize : 18, color : 'white'}}>Get Started</Text>
              </TouchableOpacity>
        </View>
    </View>
  );
}

function ListScreen({navigation}){
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'rgba(247, 186, 131, 0.15)':'rgba(247, 186, 131, 0.15)';
    const color = item.id === selectedId ? 'black' : 'gray';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate('Details', { item });
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return(
    <View style = {styles.container}>

      <View style = {{flex : 1,width : '100%', height : '100%',}}>
          <View style = {{justifyContent : 'center', alignItems : 'flex-start'}}>
              <Text style = {{color : 'red', fontSize : 22, fontWeight : 'bold', margin : 20,}}>The worlds Best Bike</Text>
          </View>
          <View style = {{flexDirection : 'row', justifyContent : 'space-around'}}>
              <TouchableOpacity style = {{borderWidth : 1,borderRadius : 5, borderColor : 'red', width : 80, height : 30, justifyContent : 'center', alignItems : 'center'}}
              >
                  <Text style = {{color : 'red'}}>All</Text>
              </TouchableOpacity>

              <TouchableOpacity style = {{borderWidth : 1,borderRadius : 5, borderColor : 'red', width : 80, height : 30, justifyContent : 'center', alignItems : 'center'}}>
                  <Text style = {{color : 'rgba(190, 182, 182, 1)'}}>Roadbike</Text>
              </TouchableOpacity>

              <TouchableOpacity style = {{borderWidth : 1,borderRadius : 5, borderColor : 'red', width : 80, height : 30, justifyContent : 'center', alignItems : 'center'}}
              >
                  <Text style = {{color : 'rgba(190, 182, 182, 1)'}}>Mountain</Text>
              </TouchableOpacity>
          
          </View>
      </View>

      <View style = {{flex : 10, paddingTop : 60,}}>

          <FlatList
          data={bikeInfo}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          numColumns = {2}
          
        />


      </View>
      
    </View>
  );
}

function DetailsScreen({route}){
  const {item} = route.params;

  return(
    <View style = {styles.container}>

      <View style = {{flex : 2, backgroundColor : 'rgba(233, 65, 65, 0.1)',justifyContent : 'center', alignItems : 'center', width : '95%', height : '95%', margin : 10}}>
          <Image source = {item.img} style = {{width : 230, height : 210}} />
      </View>

      <View style = {{flex : 2, justifyContent : 'space-around', padding : 10}} >

          <Text style = {{fontSize : 22, fontWeight : 'bold'}}>{item.title}</Text>

          <View style = {{flexDirection : 'row', alignItems : 'flex-start', justifyContent : ''}}>
              <Text style = {{color : 'gray', fontSize : 18,}}>15% OFF {item.price}$</Text>
              <Text style = {{textDecorationLine : 'line-through', fontSize : 18, marginLeft : 50}}>449$</Text>
          </View>

          <Text style = {{fontSize : 18}}>Description</Text>
          <Text style = {{fontSize : 14}}>{item.description}</Text>

          <View style = {{flexDirection : "row", justifyContent : 'space-around', alignItems : 'center'}}>
          <AntDesign name="hearto" size={30} color="black" />
          <TouchableOpacity style = {{width : '60%', height : 40, backgroundColor : 'red', justifyContent : 'center', alignItems : 'center', borderRadius : 20}}>
            <Text style = {{color : 'white', fontSize : 20}}>Add to cast</Text>
          </TouchableOpacity>
          </View>
      </View>

    </View>
  );
}




const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={ListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown : true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
})
