import React from "react";
import {Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

//background: linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #37D6F8 96.5%, #00CCF9 100%);

const YourApp = () => {
  return (
    <LinearGradient 
    
    colors = {['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8','#00CCF9']} 
    locations={[0, 0.3, 0.85, 0.96, 1]}
    style = {{
      width : '100%',
      height : '100%'
    }}>
      <View
      style={{
        flex : 5,
      }}>

      <View style = {{flex : 4, justifyContent: "center", alignItems: "center"}}> 
        <Image source={require('./assets/lock-152879 1.png')} />
      </View>


      <View style = {{flex : 2, alignItems : 'center'}}> 
      <Text style={styles.titleText}> FORGET </Text>
      <Text style={styles.titleText}>PASSWORD</Text>
      </View>


      <View style = {{flex : 2, alignItems : 'center'}}>
        <Text style = {styles.bodyText}> Provide your account’s email for which you want to reset your password </Text>
      </View>

      <View style = {{flex : 2, alignItems : 'center', flexDirection: 'row'}}>
        <FontAwesome name="envelope" size={30} color="black" 
        style = {{
          left : 40,
        }}
        />
        <TextInput
          style = {{
            width : '80%',
            height : '50%',
            backgroundColor : '#C4C4C4',
            paddingLeft : 50
          }}
          placeholder = "Email"
        />
      </View>


      <View style = {{flex : 2, justifyContent : 'space-around', flexDirection : 'row', alignItems : 'center'}}>

        <TouchableOpacity style={styles.button}>
        <Text style={styles.bodyText2}>Next</Text>
        </TouchableOpacity>

        
      </View>

      <View style = {{flex : 2, alignItems : 'center'}}>
        <Text style = {styles.bodyText2}></Text>
      </View>
    </View>
    
    </LinearGradient>

)};
const styles = StyleSheet.create({

  titleText : {
    fontSize: 24,
    fontWeight: 'bold', 
    fontFamily: 'sans-serif', 
    color: '#333', 
  },
  
  bodyText : {
    fontSize: 16, 
    fontWeight: 'normal', 
    lineHeight: 22, 
    color: '#333', 
    textAlign: 'center', 
  },

  button : {
    backgroundColor : '#E3C000',
    width : '80%',
    height : 50,
    alignItems : 'center',
    justifyContent : 'center',
    
  },

  bodyText2 : {
    fontSize: 20,  
    lineHeight: 22, 
    color: '#333', 
    textAlign: 'center', 
    fontWeight : 'bold',
  }
});
export default YourApp;
