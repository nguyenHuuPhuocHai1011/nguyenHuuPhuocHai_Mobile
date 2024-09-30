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
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {Fontisto} from '@expo/vector-icons';



const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini',
    img : require('./assets/ca_nau_lau.png'),
    shop : 'Devang',
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI',
    img : require('./assets/ga_bo_toi.png'),
    shop : 'LTD Food',
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa nang',
    img : require('./assets/xa_can_cau.png'),
    shop : 'Thế giới đồ chơi',
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    img : require('./assets/do_choi_dang_mo_hinh.png'),
    shop : 'Thế giới đồ chơi',
  },
  {
    id: '5',
    title: 'Lãnh đạo đơn giản',
    img : require('./assets/lanh_dao_gian_don.png'),
    shop : 'Minh Long book',
  },
  {
    id: '6',
    title: 'Hiểu lòng trẻ con',
    img : require('./assets/hieu_long_con_tre.png'),
    shop : 'Minh Long book',
  },
  {
    id: '7',
    title: 'Donald Trump thiên tài lãnh đạo',
    img : require('./assets/trump_1.png'),
    shop : 'Minh Long book',
  },
  
  
  
];


const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}, {flexDirection : 'row',justifyContent : 'space-between'}]}>
    <Image source = {item.img} style = {{height : 50, width : 50,}} /> 
    <View>
    <Text numberOfLines={1} 
  ellipsizeMode="tail" style={[styles.title, {color: textColor, width : 120}]}>{item.title}</Text>
    <Text numberOfLines={1} 
  ellipsizeMode="tail"  style={ {color: textColor}}>Shop {item.shop}</Text>
    </View>
    <View style = {{justifyContent : 'center'}}>
      <TouchableOpacity style = {{alignItems : 'center', justifyContent : 'center', width : 90, height : 40,    backgroundColor : 'red' }}>
    <Text style = {{}}>Chat</Text>
    </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const [item, setItem] = useState([]);
  useEffect(()=>{
    fetch('https://66fa5713afc569e13a9b5271.mockapi.io/items')
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.error(error));
  }, [])

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'white' : 'white';
    const color = item.id === selectedId ? 'black' : 'black';

    return (
      <Item
        item={item}
        //item={DATA}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style = {{flex : 1, backgroundColor : 'rgba(27, 169, 255, 1)', justifyContent : 'space-between', 
      flexDirection : 'row', alignItems : 'center'}}>
      <Feather name="arrow-left" size={24} color="black" style = {{marginLeft : 5}} />
      <Text>Chat</Text>
      <MaterialCommunityIcons name="cart-check" size={24} color="black" style = {{marginRight : 5}} />
      </View>

      <View style = {{flex : 10}}>
      <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center', padding : 30}}>
        <Text style = {{margin : 10}}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      </View>
      <FlatList
        data={item}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      </View>
      <View style = {{flex : 1, backgroundColor : 'rgba(27, 169, 255, 1)',flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
      <Feather name="menu" size={24} color="black" style = {{marginLeft : 5}} />
      <Ionicons name="home-outline" size={24} color="black" />
      <Fontisto name="arrow-return-left" size={24} color="black" style = {{marginRight : 5}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 10,
    borderBottomWidth : 1,
    borderColor : 'rgba(196, 196, 196, 1)',
    
  },
  title: {
    fontSize: 15,
    marginLeft : 0,
  },
});

export default App;