import React from "react";
import {Text, View, Image, Button, TouchableOpacity, StyleSheet, Alert} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

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

      <View style = {{flex : 5, justifyContent: "center", alignItems: "center"}}> 
        <Image source={require('./assets/Ellipse 8.png')} />
      </View>


      <View style = {{flex : 2, alignItems : 'center'}}> 
      <Text style={styles.titleText}> GROW </Text>
      <Text style={styles.titleText}>YOUR BUSINESS </Text>
      </View>


      <View style = {{flex : 2, alignItems : 'center'}}>
        <Text style = {styles.bodyText}> We will help you to grow your business using </Text>
        <Text style = {styles.bodyText}> online server </Text>
      </View>


      <View style = {{flex : 2, justifyContent : 'space-around', flexDirection : 'row', alignItems : 'center'}}>

        <TouchableOpacity style={styles.button}>
        <Text style={styles.bodyText2}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
        <Text style={styles.bodyText2}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style = {{flex : 2, alignItems : 'center'}}>
        <Text style = {styles.bodyText2}> HOW WE WORK?</Text>
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
    width : 100,
    height : 50,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 10
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
