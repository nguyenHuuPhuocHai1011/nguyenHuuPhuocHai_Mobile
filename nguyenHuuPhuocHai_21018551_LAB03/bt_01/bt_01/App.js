import React from "react";
import {Text, View, Image, Button, TouchableOpacity, StyleSheet, Alert} from "react-native";

const YourApp = () => {
  return (
    <View
      style={{
        backgroundColor: '#00CCF9',
        flex : 1,
        
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

    </View>
    
  );
  
};

const styles = StyleSheet.create({

  titleText: {
    fontSize: 24,
    fontWeight: 'bold', 
    fontFamily: 'sans-serif', 
    color: '#333', 
  },
  
  bodyText: {
    fontSize: 16, 
    fontWeight: 'normal', 
    lineHeight: 22, 
    color: '#333', 
    textAlign: 'center', 
  },

  button:{
    backgroundColor : '#E3C000',
    width : 100,
    height : 50,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 10
  },

  bodyText2: {
    fontSize: 16,  
    lineHeight: 22, 
    color: '#333', 
    textAlign: 'center', 
    fontWeight : 'bold',
  },
});



export default YourApp;