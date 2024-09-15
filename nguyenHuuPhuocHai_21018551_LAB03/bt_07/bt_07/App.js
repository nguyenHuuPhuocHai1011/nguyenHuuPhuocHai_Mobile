import React , { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const YourApp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return(
      <LinearGradient 
      colors = {['rgba(251, 203, 0, 1)', 'rgba(191, 154, 0, 1)']} 
      locations={[0.2, 0.8]}
      style = {{
        width : '100%',
        height : '100%'
      }}>
      <View style = {{
        flex : 1,
        justifyContent : 'center',
      }}>

          <View style = {{
            flex : 1,
            justifyContent : 'center',
            alignItems : 'flex-start'
          }}>

          <Text style = {{
            fontWeight : 'bold',
            fontSize : 25,
            marginLeft : 30
          }}>LOGIN</Text>

          </View> 

          <View style = {{
            flex : 1,
            width : '100%',
            height : '100%',
            justifyContent : 'space-evenly',
            alignItems : 'center'
          }}>
          
          <View style = {{
              width : '90%',
              height : '30%',
              flexDirection : 'row',
              justifyContent : 'center',
              marginTop : 5, 
              borderWidth : 1,
              borderColor : 'white',
              backgroundColor : 'rgba(196, 196, 196, 0.3)',
            }}>
            <FontAwesome name="user" size={35} color="#000" style={{
              marginTop : 5,
              marginLeft : 5,
            }} />
            <TextInput style = {{
              position : 'relative',
              width : '100%',
              height : '100%',
              paddingLeft : 10,
              marginLeft : 5,
            }}
              placeholder = "Name"/>
          </View>

          <View style = {{
              width : '90%',
              height : '30%',
              flexDirection : 'row',
              justifyContent : 'center',
              marginTop : 5, 
              borderWidth : 1,
              borderColor : 'white',
              backgroundColor : 'rgba(196, 196, 196, 0.3)',
            }}>

              <MaterialIcons name="lock" size={35} color="#000" style={{
                paddingTop : 5,
                
                }} />
            
              <TextInput style = {{
              position : 'relative',
              width : '100%',
              height : '100%',
              paddingLeft : 10
            }}
              placeholder = "Password"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <MaterialIcons
              name={passwordVisible ? 'visibility-off' : 'visibility'}
              size={24}
              color="gray"
              style = {{
                position : 'absolute',
                top : 10,
                right : 10,
                }}
              />
            </TouchableOpacity>

            </View>

          </View>

          <View style = {{
            flex : 1,
            justifyContent : 'center',
            alignItems : 'center',
          }}>
              <TouchableOpacity style = {{
                width : '90%',
                height : 50,
                backgroundColor : 'black',
                justifyContent : 'center',
                alignItems : 'center',
              }}>
              
              <Text style = {{
                color : 'white',
                fontSize : 20,
                fontWeight : 'bold',
              }}>LOGIN</Text>
              
              </TouchableOpacity>
          </View>

          <View style = {{
            flex : 1,
            alignItems : 'center',
          }}>

              <TouchableOpacity style = {{
                width : '90%',
                height : 50,
                justifyContent : 'center',
                alignItems : 'center',
              }}>
              
              <Text style = {{
                fontSize : 20,
                fontWeight : 'bold',
              }}>CREATE ACCOUNT</Text>
              
              </TouchableOpacity>

          </View>

          



      </View>
      </LinearGradient>
)};
export default YourApp;