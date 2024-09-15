import React , { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {FontAwesome6} from '@expo/vector-icons';

const YourApp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return(
      <View style = {{
        flex : 1,
        justifyContent : 'center',
      }}>

        <View style = {{
          flex : 1.5,
          justifyContent : 'center',
          alignItems : 'center',
        }}>
          
            <Image source = {require('./assets/eyeball-309797 1.svg')} 
              style = {{
                marginTop : 20,
              }}
            />

        </View> 

        <View style = {{
          flex : 1,
          justifyContent : "space-evenly",
          alignItems : "center",
        }}>
        
            <View style = {{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#000', 
              width: 250, 
            }}> 
            <AntDesign name="user" size={30} color="blue" style = {{}} />
            <TextInput style = {{
              flex: 1,
              fontSize: 16,
              paddingVertical: 5,
              marginLeft : 15,
              color : 'gray'
            }}
              placeholder = 'Please input user name'
            ></TextInput>
            </View>

            <View style = {{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#000', 
              width: 250, 
            }}> 
            <MaterialIcons name="lock" size={30} color="blue" />
            <TextInput style = {{
              flex: 1,
              fontSize: 16,
              paddingVertical: 5,
              color : 'gray',
              marginLeft : 15,
            }}
              placeholder = 'Please input password'
            ></TextInput>
            </View>
        
        
        </View>

        <View style = {{
          flex : 0.75,
          justifyContent : "center",
          alignItems : 'center',
        }}>
        
        <TouchableOpacity style = {{
          borderRadius : 10,
          backgroundColor : 'rgba(56, 111, 252, 1)',
          width : '80%',
          height : 50,
          alignItems : "center",
          justifyContent : "center",
        }}>
          <Text style = {{
            color : 'white',
            fontSize : 20,
          }}>LOGIN</Text>
        </TouchableOpacity>

        </View>

        <View style = {{
          flex : 0.25,
          flexDirection : 'row',
          justifyContent : 'space-between',
          marginLeft : 40,
          marginRight : 40,

        }}>
        
        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Forgot password</Text>
        </TouchableOpacity>
        
        
        </View>

        <View style = {{
          flex : 0.25,
          justifyContent : 'center',
          alignItems : 'center',
        }}>

          <View style = {{
            flexDirection: 'row',
            alignItems: 'center',
            width: '80%',
          }}>
          
            <View style = {{
              flex: 1, 
              height: 1,
              backgroundColor: 'blue',
            }}/>

            <Text style = {{
              marginHorizontal: 10, // Space between text and lines
              fontSize: 14,
              marginTop : -3,
            }}>Other Login Methods</Text>

            <View style = {{
              flex: 1, 
              height: 1,
              backgroundColor: 'blue',
            }}/>
          
          </View>


        </View>

        <View style = {{
          flex : 1,
          justifyContent : 'center',
          alignItems : 'center'
        }}>

            <View style = {{
              width : '80%',
              flexDirection : 'row',
              justifyContent : 'space-between',

            }}>
            
            <TouchableOpacity style = {{
            width: 70,
            height: 70,
            backgroundColor: 'rgba(58, 180, 255, 1)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            elevation: 4
          }}>
              <FontAwesome6 name="user-plus" size={45} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style = {{
            width: 70,
            height: 70,
            backgroundColor: 'rgba(244, 170, 71, 1)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            elevation: 4
          }}>
              <AntDesign name="wifi" size={45} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style = {{
            width: 70,
            height: 70,
            backgroundColor: 'rgba(37, 71, 155, 1)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            elevation: 4
          }}>
              <FontAwesome6 name="facebook-f" size={45} color="white" />
          
          </TouchableOpacity>
            
            </View>
        
        
        </View>
        
      
      
      </View>
)};
export default YourApp;