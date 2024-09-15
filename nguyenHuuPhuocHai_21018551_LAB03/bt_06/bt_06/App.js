import React , { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const YourApp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [selectedGender, setSelectedGender] = useState(null);
    return(
      <View style = {{
        flex : 1,
        backgroundColor : 'rgba(49, 170, 82, 0.19)',
        
      }}>
      
        <View style = {{
          flex : 1.5,
          justifyContent : "center",
          alignItems : 'center'
        }}>
          <Text style = {{
            fontSize : 20,
            fontWeight : 'bold'
          }}>REGISTER</Text>
        </View>

        <View style = {{
          flex : 7,
          justifyContent : 'center',
          alignItems : "center",
          alignContent : 'space-around',
          
        }}>

          <TextInput style = {{
              width : '90%',
              height : '15%',
              backgroundColor : 'rgba(196, 196, 196, 0.30)',
              paddingLeft : 10,
            }}
              placeholder = "Name"/>

          <TextInput style = {{
              width : '90%',
              height : '15%',
              backgroundColor : 'rgba(196, 196, 196, 0.30)',
              paddingLeft : 10,
              marginTop : 5
            }}
              placeholder = "Phone"/>

          <TextInput style = {{
              width : '90%',
              height : '15%',
              backgroundColor : 'rgba(196, 196, 196, 0.30)',
              paddingLeft : 10,
              marginTop : 5
            }}
              placeholder = "Email"/>

          <View style = {{
              width : '90%',
              height : '15%',
              flexDirection : 'row',
              justifyContent : 'center',
              marginTop : 5
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
                top : 15,
                right : 10
                }}
              />
            </TouchableOpacity>

            </View>

          <TextInput style = {{
              width : '90%',
              height : '15%',
              backgroundColor : 'rgba(196, 196, 196, 0.30)',
              paddingLeft : 10,
              marginTop : 5
            }}
              placeholder = "Birthday"/>
        
          <View style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>

          <TouchableOpacity style = {{
              flexDirection: 'row', 
              alignItems: 'center',
              marginHorizontal: 10,
          }}
              onPress={() => setSelectedGender('Male')}
          >
              <View style = {{
                height: 20,
                width: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              {selectedGender === 'Male' && <View style = {{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: 'black',
              }}/>}</View>
              <Text style = {{
                  fontSize: 16,
                  color: '#000'
              }}>Male
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {{
              flexDirection: 'row', 
              alignItems: 'center',
              marginHorizontal: 10,
          }}
              onPress={() => setSelectedGender('Female')}
          >
              <View style = {{
                height: 20,
                width: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              {selectedGender === 'Female' && <View style = {{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: 'black',
              }}/>}</View>
              <Text style = {{
                  fontSize: 16,
                  color: '#000'
              }}>Female
              </Text>
          </TouchableOpacity>
          </View>
        
        
        </View>

        <View style = {{
          flex : 1,
          justifyContent : 'center',
          alignItems : 'center'
        }}>
        <TouchableOpacity style = {{
          width : '90%',
          height : 50,
          backgroundColor : 'red',
          alignItems : 'center',
          justifyContent : 'center'
        }}>
        
        <Text style = {{
                fontSize: 20,  
                lineHeight: 22, 
                color: 'rgba(255, 255, 255, 1)', 
                textAlign: 'center', 
                fontWeight : 'bold',
              }}>REGISTER</Text>
        </TouchableOpacity>
        </View>

        <View style = {{
          flex : 1.5,
          alignItems : 'center',
          paddingTop : 10
        }}>
        <Text>When you agree to terms and conditions</Text>
        </View>
        
      </View>
)};
export default YourApp;