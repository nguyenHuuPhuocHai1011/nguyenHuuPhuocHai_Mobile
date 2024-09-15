import React from "react";
import {Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView} from "react-native";
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

      <View style = {{flex : 7, justifyContent: "center", alignItems: "center"}}> 
        <Text 
        style = {{
          fontSize : 60,
          fontWeight : 'bold',
        }}
        >CODE</Text>
      </View>


      <View style = {{flex : 2, alignItems : 'center'}}> 
      <Text style={styles.titleText}> VERIFICATION </Text>
      </View>


      <View style = {{flex : 2, alignItems : 'center'}}>
        <Text style = {styles.bodyText}> Enter ontime password sent on </Text>
        <Text style = {styles.bodyText}> ++849092605798 </Text>
      </View>

      <View style = {{flex : 2, alignItems : 'center', flexDirection: 'row'}}>
        
        <ScrollView style = {{
          flex: 1,
          padding: 16,
        }}>

          <View style={styles.tableRow}>
        <TextInput style={styles.tableCell}></TextInput>
        <TextInput style={styles.tableCell}></TextInput>
        <TextInput style={styles.tableCell}></TextInput>
        <TextInput style={styles.tableCell}></TextInput>
        <TextInput style={styles.tableCell}></TextInput>
        <TextInput style={styles.tableCell}></TextInput>
      </View>

        
        </ScrollView>
          
      
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
    fontSize: 20,
    fontWeight: 'bold', 
    fontFamily: 'sans-serif', 
    color: '#333', 
    top : -20
  },
  
  bodyText : {
    fontSize: 16, 
    fontWeight: 'bold', 
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
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  tableCell: {
    flex: 1, 
    width : 50,
    height: 50, 
    backgroundColor: '#e0e0e0', 
    borderWidth: 1, 
    borderColor: '#333', 

  
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 3.84, 


    elevation: 5, 
  },
});
export default YourApp;
