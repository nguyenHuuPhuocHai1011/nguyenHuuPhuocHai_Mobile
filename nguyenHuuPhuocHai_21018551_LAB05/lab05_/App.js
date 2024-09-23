import React , { useState } from "react";
import {Text, View, Image, Button, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Entypo} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';

const phoneInfo = {
  name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
  colors: [ "Xám", "Đỏ", "Đen", "Xanh"],
  price: "1.790.000 VNĐ",
  supplier: "Tiki Tradding",
  images: {
    Xám: require('./assets/vs_silver.png'),
    Đỏ: require('./assets/vs_red.png'),
    Đen: require('./assets/vs_black.png'),
    Xanh: require('./assets/vs_blue.png'),
  },
}

function HomeScreen({navigation, route}){
  const selectedColor = route.params?.selectedColor || 'Xanh';
  const selectedImage = phoneInfo.images[selectedColor];

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor : 'white', width : '100%', height : '100%'}}>
      <View style = {{
        flex : 3,
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height : '100%',
      }}>
        <Image source = {selectedImage} style = {{width : 300, height : 300, resizeMode: 'contain',}} />
      </View>

      <View style = {{flex : 2,}}>

        <View style = {{marginTop : 15,}}>
          <Text>{phoneInfo.name}</Text>
        </View>

        <View style = {{
          justifyContent : 'space-between',
          alignItems : 'center',
          flexDirection : 'row',
          marginTop : 10,
          
        }}>
          <View style = {{
            flexDirection: 'row',  
            justifyContent: 'center',
            alignItems: 'center',
            marginTop : 10,
          }}>
            <Entypo name="star" size = {20} color = 'rgba(224, 228, 26, 1)' />
            <Entypo name="star" size = {20} color = 'rgba(224, 228, 26, 1)' />
            <Entypo name="star" size = {20} color = 'rgba(224, 228, 26, 1)' />
            <Entypo name="star" size = {20} color = 'rgba(224, 228, 26, 1)' />
            <Entypo name="star" size = {20} color = 'rgba(224, 228, 26, 1)' />
          </View>

          <Text>(Xem 828 đánh giá)</Text>
        </View>

        <View style = {{
          flexDirection : 'row',
          justifyContent : 'space-evenly',
          marginLeft : -45,
          alignItems : 'center',
          marginTop : 10,
        }}>

          <Text style = {{fontWeight : 'bold', fontSize : 18}}>1.790.000 đ</Text>
          <Text style = {{textDecorationLine : 'line-through', color : 'gray', fontWeight : 'bold'}}>1.790.000 đ</Text>
        </View>

        <View style = {{
          flexDirection : 'row',
          marginTop : 10,
        }}>
          <Text style = {{fontSize : 12, color : 'red', fontWeight : 'bold'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Text style = {{
            borderWidth : 1,
            borderRadius : 10,
            width : 17,
            height : 17,
            marginLeft : 10,

          }}> ? </Text>
        </View>

        <View style = {{marginTop : 20,}}>
          <TouchableOpacity style = {{
            width : '100%',
            height : 40,
            borderWidth : 1,
            borderRadius : 15,
            justifyContent : 'center',

          }}
          onPress={() => navigation.navigate('Details')}
          >
            <View style = {{flexDirection : 'row', justifyContent : "space-between"}}>
              <Text style = {{textAlign : 'center', flex : 1,}}>4 MÀU-CHỌN MÀU</Text>
              <AntDesign name = "right" size = {18} />
            </View>
          </TouchableOpacity>
        </View>

      </View>

      <View style = {{flex : 0.5, width : '100%', justifyContent : 'center', alignItems : 'center'}}>
        <TouchableOpacity style = {{
          backgroundColor : 'red',
          width : '80%',
          height : '80%',
          borderRadius : 15,
          justifyContent : 'center',
          alignItems : 'center',

        }}>
          <Text style = {{fontWeight : 'bold', color : 'white',}}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const colorMapping = {
  Xám: 'rgba(197, 241, 251, 1)',
  Đỏ: 'rgba(243, 13, 13, 1)',
  Đen: 'rgba(0, 0, 0, 1)',
  Xanh: 'rgba(35, 72, 150, 1)',
};

function DetailsScreen({ navigation }) {
  const [selectedColor, setSelectedColor] = useState('Xanh'); 

  const handleDone = () => {
    navigation.navigate('Home', { selectedColor });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      
      <View style = {{flex : 1.25, backgroundColor : 'white', width : '100%', height : '100%',
        flexDirection : 'row', paddingTop : 10,paddingRight : 5,
      }}>
        <Image source = {selectedColor ? phoneInfo.images[selectedColor] : phoneInfo.images[phoneInfo.colors[0]] } style = {{width : 100, height : 100, resizeMode: 'contain',}} />
        <View>
            <Text style = {{flexWrap : 'wrap'}}>{phoneInfo.name}</Text>
            <Text>Giá: {phoneInfo.price}</Text>
            <Text>Nhà cung cấp: {phoneInfo.supplier}</Text>
            {selectedColor && <Text>Màu: {selectedColor}</Text>}
        </View>
      </View>

      <View style = {{ flex : 4, backgroundColor : 'gray', width : '100%', height : '100%', paddingTop : 10,}}>
      
      <Text style = {{fontSize : 18, paddingLeft : 5,}}>Chọn một màu bên dưới:</Text>

      <View style = {{width : '100%', height : '90%', alignItems : 'center', flexDirection : 'column', justifyContent : 'space-between'}}>

        {phoneInfo.colors.map((color) => (
          <TouchableOpacity 
            key = {color}
            style = {[{width: '22%', height: '22%', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginHorizontal: 5, marginTop : 5},{backgroundColor: colorMapping[color]}]}
            onPress = {() => setSelectedColor(color)}
          >
          </TouchableOpacity>
        ))}
      
      
      </View>
      
      
      </View>
      <View style = {{flex : 1, width : '100%', height : '100%', justifyContent : 'center', alignItems :'center', backgroundColor : 'gray'}}>
        <TouchableOpacity style = {{
          height : '50%',
          width : '90%',
          backgroundColor : 'rgba(25, 82, 226, 0.58)',
          borderColor : 'rgba(202, 21, 54, 1)',
          borderWidth : 1,
          borderRadius : 20,
          justifyContent : 'center',
        }}
          onPress = {handleDone}
        >
          <Text style = {{fontSize : 25, fontWeight: 'bold', color : 'white', textAlign : 'center', alignItems : 'center'}}>XONG</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function YourApp()  {
    
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
)};
export default YourApp;