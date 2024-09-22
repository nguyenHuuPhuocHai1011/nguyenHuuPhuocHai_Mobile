import React, { useState } from 'react'
import { View, Text, Button, Image, TouchableOpacity, TextInput} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {

const pricePerItem = 141.800
const [quantity, setQuantity] = useState(1)
const totalPrice = (quantity * pricePerItem).toFixed(3)

  return (
    <View style = {{
      flex : 1,
      backgroundColor : 'gray',
    }}>
      
      <View style = {{
        flex : 2.2,
        backgroundColor : 'white',

      }}>

          <View style = {{
            flex : 1,
            flexDirection : 'row',

            padding : 10,
            

          }}>

          <Image source = {require('./assets/book.png')}/>
          
          <View style = {{
            padding : 5,
            
          }}>
          
              <Text style = {{fontSize : 12, fontWeight : 'bold'}}>Nguyên hàm tích phân và ứng dụng</Text>

              <Text style = {{fontSize : 12, fontWeight : 'bold', marginTop : 7}}>Cung cấp bởi Tiki Trading</Text>

              <Text style={{ color : 'red' ,marginTop : 7, fontWeight : 'bold'}}>{pricePerItem} đ</Text>

              <Text style={{ color : 'gray', textDecorationLine : 'line-through',marginTop : 6 , fontWeight : 'bold'}}>141.800 đ</Text>

              <View style = {{
                padding : 10,
                flexDirection : 'row',
                justifyContent : 'space-between'
              }}>
              
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
                          if (quantity > 1) {  // Giảm nhưng không cho số lượng xuống dưới 1
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

                  <TouchableOpacity>
                    <Text style = {{color : 'blue', marginTop : 5,}}>Mua sau</Text>
                  </TouchableOpacity>
              
              </View>

          </View>
          
          </View>

          <View style = {{
            flex : 0.5,
            width: '70%',
            flexDirection : 'row',
            justifyContent : 'space-evenly',
            alignItems : 'center'
          }}>
          
          <Text style = {{alignItems : ''}}>Mã giảm giá đã lưu</Text>
          
          <TouchableOpacity>

            <Text style = {{ color : 'blue', marginLeft : 15,}}>Xem tại đây</Text>
          
          </TouchableOpacity>
          
          </View>

          <View style = {{
            flex : 0.75,
            
            justifyContent : 'space-around',
            flexDirection : 'row'
            
          
          }}>
          
            <View style = {{
              width : '60%',
              height : '60%',
              flexDirection : 'row',
              justifyContent : 'center',
              borderWidth : 1,
              borderColor : 'gray',
            }}>
            <MaterialIcons name="rectangle" size={35} color="yellow" style={{
                marginTop : 10,
                marginLeft : 10,
            }} />
            <TextInput style = {{
              position : 'relative',
              width : '100%',
              height : '100%',
              paddingLeft : 10,
              marginLeft : 5,
              fontWeight : 'bold',
              fontSize : 20,
            }}
              placeholder = "Mã giảm giá"/>
          </View>

          <TouchableOpacity style = {{
            backgroundColor : 'rgba(10, 94, 183, 1)',
            height : '60%',
            width : '30%',
            justifyContent : 'center',
            alignItems : 'center'
          }}>
              <Text style = {{
                color : 'white',
                fontSize : 20,
                fontWeight : 'bold',
              }}>Áp dụng</Text>
          </TouchableOpacity>
          
          </View>
      
      
      </View>
      <View style = {{
        flex : 0.05,
      }}></View>
      <View style = {{
        flex : 0.35,
        flexDirection : 'row',
        backgroundColor : 'white',
        justifyContent : 'space-around',
        alignItems : 'center',
      }}>

          <Text style = {{fontSize : 12, fontWeight : 'bold'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>

          <TouchableOpacity>
            <Text style = {{color : 'blue', fontSize : 12, fontWeight : 'bold'}}>Nhập tại đây?</Text>
          </TouchableOpacity>

      </View>
      <View style = {{
        flex : 0.05,
      }}></View>
      <View style = {{
        flex : 0.35,
        backgroundColor : 'white',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center'
      }}>
      
      <Text style = {{
        fontWeight : 'bold', fontSize : 25,
      }}>Tạm tính</Text>

      <Text style = {{
          color : 'red', fontWeight : 'bold', fontSize : 25,
      }}>{totalPrice} đ</Text>
      
      </View>

      <View style = {{
        flex : 0.5,
      }}></View>

      <View style = {{
        flex : 1,
        backgroundColor : 'white',
        justifyContent : 'space-around',
      }}>
      
      <View style = {{
        flexDirection : 'row',
        justifyContent : 'space-around',
      }}>
        
        <Text style = {{
          fontSize : 24, 
          color : 'gray',
          fontWeight : 'bold',
        }}>Thành tiền</Text>

        <Text style = {{
          color : 'red', fontWeight : 'bold', fontSize : 25,
        }}>{totalPrice} đ</Text>

      </View>
      
      <View style = {{
        justifyContent : 'center',
        alignItems : 'center',

      }}>
        <TouchableOpacity style = {{
          width : '90%',
          height : 50,
          backgroundColor : 'red',
          alignItems : 'center',
          justifyContent : 'center',
        }}>
          <Text style = {{
            fontSize : 20,
            fontWeight : 'bold',
            color : 'white'
          }}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
      
      </View>

    </View>
  )
}

