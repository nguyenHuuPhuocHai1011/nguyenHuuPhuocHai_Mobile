import React , { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const YourApp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return(
      <View style = {{
        flex : 1,
        backgroundColor : 'rgba(49, 170, 82, 0.19)',
      }}>
      
        <View style = {{
          flex : 1,
          justifyContent : 'center',
          alignItems : 'center',
        }}
        >
            <Text style ={{
              fontSize : 20,
              fontWeight : 'bold',
            }}>LOGIN</Text>
        </View>

        <View style = {{
          flex : 2,
          justifyContent : 'space-evenly',
          alignItems : 'center'
        }}
        >
            <TextInput style = {{
              width : '90%',
              height : '20%',
              backgroundColor : 'rgba(196, 196, 196, 0.30)',
              paddingLeft : 10
            }}
              placeholder = "Email"
            >
            </TextInput>
            
            <View style = {{
              width : '90%',
              height : '20%',
              flexDirection : 'row',
              justifyContent : 'center'
            }}>
                <TextInput style = {{
              position : 'relative',
              width : '100%',
              height : '100%',
              backgroundColor : 'rgba(196, 196, 196, 0.30)',
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
                top : 8,
                right : 10
                }}
              />
            </TouchableOpacity>

            </View>


        </View>

        <View style = {{
          flex : 1,
          justifyContent : 'center',
          alignItems : 'center'
        }}
        >
            <TouchableOpacity style = {{
              backgroundColor : 'red',
              width : '90%',
              height : 50,
              alignItems : 'center',
              justifyContent : 'center',
            }}>
              <Text style = {{
                fontSize: 20,  
                lineHeight: 22, 
                color: 'rgba(255, 255, 255, 1)', 
                textAlign: 'center', 
                fontWeight : 'bold',
              }}>LOGIN</Text>
            </TouchableOpacity>
        </View>

        <View style = {{
          flex : 1,
          justifyContent : 'space-around',
          alignItems : 'center',
          
        }}>
            <Text>When you agree to terms and conditions</Text>

            <TouchableOpacity>
              <Text style = {{
                color : 'blue',
              }}>For got your password?</Text>
            </TouchableOpacity>

            <Text>Or login with</Text>
        
        </View>
        
        <View style = {{
          flex : 1,
          justifyContent : 'center',
          alignItems : 'center'
        }}>

          <View style = {{
            flex : 1,
            flexDirection : 'row',
            alignItems : 'center'
          }}>
          
          <TouchableOpacity style = {{
            width: 90,
            height: 50,
            backgroundColor: 'rgba(37, 71, 155, 1)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            elevation: 4
          }}>
          <Image source = {require('./assets/Vector.png')} />
          </TouchableOpacity>

          <TouchableOpacity style = {{
            width: 90,
            height: 50,
            backgroundColor: 'rgba(15, 142, 224, 1)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            elevation: 4
          }}>
          <Text style = {{
            color : 'white',
            fontWeight : 'bold',
            fontSize : 35,
          }}>Z</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {{
            width: 90,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            borderColor : 'rgba(6, 128, 241, 1)',
            borderWidth : 2,
            elevation: 4
          }}>
          <Image source = {require('./assets/Group.png')} />
          </TouchableOpacity>

          </View>
        
        </View>
      
      
      </View>
)};
export default YourApp;