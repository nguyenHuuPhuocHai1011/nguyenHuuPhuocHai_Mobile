import React , { useState, useEffect, Alert } from "react";
import {Text, View, Image, Button, TouchableOpacity, StyleSheet, TextInput, FlatList} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo, AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';

// const job_info = [
//   {
//     id : "1", tittle : "To check email",
//   },
//   {
//     id : "2", tittle : "UI task web page",
//   },
//   {
//     id : "3", tittle : "Learn Javascprit basic",
//   },
//   {
//     id : "4", tittle : "Learn HTML Advance",
//   },
//   {
//     id : "5", tittle : "Medical App UI",
//   },
//   {
//     id : "6", tittle : "Learn Java",
//   },
// ]

const Item = ({item, onEdit}) => {
  return (
    <View style = {styles.taskContainer}>
        <TouchableOpacity style = {styles.checkbox} 
        disabled = {true}
        >
            <AntDesign name="checkcircle" size={24} color="green" />
        </TouchableOpacity>

        <Text style = {{flex: 1,fontSize: 14,}}>
            {item.title}
        </Text>

        <TouchableOpacity style = {{marginLeft : 10}} 
            onPress = {onEdit}
        >
            <Entypo name="edit" size={24} color="red" />
        </TouchableOpacity>
    </View>
  );
}

function HomeScreen({navigation, route}){

  const [name, setName] = useState('');

    return(
      <View style = {styles.container}>

          <View style = {{flex : 2, justifyContent : 'center', alignItems : 'center'}}>
            <Image source = {require("./assets/Image 95.png")} />
          </View>

          <View style = {{flex : 1, justifyContent : 'space-around',}}>
              <View style = {{alignItems : 'center'}}>
              <Text style = {{fontSize : 20,fontWeight : 'bold', color : 'rgba(131, 83, 226, 1)', width : 150, textAlign : 'center'}}>MANAGE YOUR TASK</Text>
              </View>
          

              <View style = {{alignItems : 'center', flexDirection : 'row'}}>
                <Feather name="mail" size={20} color="black" style = {{left : 30}} />
                <TextInput  style = {{
                width : "85%", height : 35,
                borderWidth : 1, paddingLeft : 35,
                borderColor : 'gray',
                color : 'gray'
              }}
              
              placeholder = "Enter your name"
              value = {name}
              onChangeText = {setName}
              ></TextInput>
              
              </View>
          </View>

          <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center', flexDirection : "row"}}>

              <TouchableOpacity style = {{
                width : '50%', height : 40,
                borderWidth : 1, borderRadius : 20,
                borderColor : 'background: rgba(0, 189, 214, 1)',
                backgroundColor : 'background: rgba(0, 189, 214, 1)',
                justifyContent : 'center',
                alignItems : 'center'

              }}
              
              onPress={() => navigation.navigate('Details', {userName : name})}
              
              >
                  <Text style = {{color : 'white'}}>GET STATED</Text>
              </TouchableOpacity>

              <AntDesign name="arrowright" size={20} color="white" style = {{right : 35}} />
          </View>

      </View>
    );
}

function DetailsScreen({ navigation, route }) {
  const {userName, refresh} = route.params;
  //const [tasks] = useState(job_info);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://67038f17ab8a8f8927309d88.mockapi.io/lab07_1')
      .then(response => response.json())
      .then(data => {
        setTasks(data);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [refresh]);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onEdit={() => navigation.navigate('EditDelete', { id: item.id, currentTitle: item.title })}
      />
    );
  };
    return (
      <View style = {styles.container}>

          <View style = {{flex : 1, flexDirection : 'row',justifyContent : 'space-between',}}>

              <View >
                <TouchableOpacity
                
                onPress = {() => navigation.goBack()}
                >
                  <AntDesign name="arrowleft" size={24} color="black" style = {{top : 10,}} />
                </TouchableOpacity>
              </View>

              <View style = {{flexDirection : "row",}}>
                <View>
                  <Image source = {require('./assets/Rectangle.png')} style = {{marginRight : 10,
                  borderRadius : 50, backgroundColor : 'rgba(217, 203, 246, 1)',
                  }} />
                </View>

                <View >
                  <Text style = {{fontSize : 20}}>Hi {userName}</Text>
                  <Text>Have a grate day a head</Text>

                </View>
              </View>
          
          </View>

          <View style = {{flex : 0.75, flexDirection : 'row',}}>
              <Entypo name="magnifying-glass" size={24} color="black" style = {{left : 30, top : 5,}} />
              <TextInput
              style = {{
                borderWidth : 1, borderRadius : 5, borderColor : 'gray',
                width : "85%",height : 35,
                paddingLeft : 30
              }}
              
              placeholder = "Search"
              />
          </View>

          <View style={{ flex: 5 }}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList 
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        )}
      </View>

          <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>

              <TouchableOpacity style = {{
                backgroundColor : 'rgba(0, 189, 214, 1)',
                borderColor : 'rgba(0, 189, 214, 1)', 
                width : 50, height : 50,
                justifyContent : 'center', alignItems : 'center',
                borderRadius : 50,
              }}
              onPress = {() => navigation.navigate('Add', userName)}
              >
                <Text style = {{fontSize : 20, color : 'white', textAlign : 'center'}}>+</Text>
              </TouchableOpacity>

          </View>
      </View>
    );
}

function AddScreen({ navigation, route }) {
  const userName = route.params;
  const [jobTitle,setJobTitle] = useState('');
  const [error, setError] = useState('');

  const addJobToAPI = async (newJob) => {
    try {
      const response = await fetch('https://67038f17ab8a8f8927309d88.mockapi.io/lab07_1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newJob }),
      });

      if (!response.ok) {
        throw new Error('Failed to add job');
      }

      const data = await response.json();
      console.log('Job added:', data);
      
      navigation.navigate('Details', { userName, refresh: true });
    } catch (error) {
      console.error(error);
      setError('Có lỗi xảy ra khi thêm công việc.');
    }
  };

  return (
    <View style = {styles.container}>
        <View style = {{flex : 0.5, flexDirection : 'row',justifyContent : 'space-between',}}>

              <View style = {{flexDirection : "row",}}>
                <View>
                  <Image source = {require('./assets/Rectangle.png')} style = {{marginRight : 10,
                  borderRadius : 50, backgroundColor : 'rgba(217, 203, 246, 1)',
                  }} />
                </View>

                <View >
                  <Text style = {{fontSize : 20}}>Hi {userName}</Text>
                  <Text>Have agrate day a head</Text>

                </View>
              </View>

              <View >
                <TouchableOpacity
                
                onPress = {() => navigation.goBack()}
                >
                  <AntDesign name="arrowleft" size={24} color="black" style = {{top : 10, right : 30,}} />
                </TouchableOpacity>
              </View>
          
        </View>

        <View style = {{flex : 1, alignItems : 'center', width : "100%", justifyContent : 'space-between',}}>
            <Text style = {{marginBottom : 50, fontSize : 25, fontWeight : 'bold'}}>ADD YOUR JOB</Text>
            <View style = {{flex : 1, flexDirection : 'row', width : "100%"}}>
              <MaterialIcons name="list-alt" size={24} color="green" style = {{left : 27, top : 5}} />
              <TextInput
              style = {{
                borderWidth : 1, borderRadius : 5, borderColor : 'gray',
                width : "85%",height : 35,
                paddingLeft : 30
              }}
              
              placeholder = "Input your job"
              value={jobTitle}
              onChangeText={setJobTitle}
              ></TextInput>
            </View>

            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

            <View style = {{ 
              justifyContent : 'center', alignItems : 'center', flexDirection : "row", width : '100%',}}>

              <TouchableOpacity style = {{
                width : '50%', height : 40,
                borderWidth : 1, borderRadius : 10,
                borderColor : 'background: rgba(0, 189, 214, 1)',
                backgroundColor : 'background: rgba(0, 189, 214, 1)',
                justifyContent : 'center',
                alignItems : 'center',
                marginLeft : 10,

              }}
              
              onPress={() => {
              if (jobTitle.trim() === '') {
                setError('Vui lòng nhập tiêu đề công việc.');
                return;
              }
              addJobToAPI(jobTitle);
            }}
              
              >
                  <Text style = {{color : 'white'}}>FINISH</Text>
              </TouchableOpacity>

              <AntDesign name="arrowright" size={20} color="white" style = {{right : 35}} />
          </View>
        </View>


          <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <Image source = {require('./assets/Image 95.png')} style = {{width : 200, height : 200}} />
          </View>
    </View>
  );
  
}

function EditDeleteScreen({ navigation, route }) {
  const { id, currentTitle } = route.params;
  const [jobTitle, setJobTitle] = useState(currentTitle);
  const [error, setError] = useState('');

  const updateJobInAPI = async () => {
    try {
      const response = await fetch(`https://67038f17ab8a8f8927309d88.mockapi.io/lab07_1/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: jobTitle }),
      });

      if (!response.ok) {
        throw new Error('Failed to update job');
      }

      console.log('Job updated:', jobTitle);
      navigation.navigate('Details', { refresh: true });
    } catch (error) {
      console.error(error);
      setError('Có lỗi xảy ra khi cập nhật công việc.');
    }
  };

  const deleteJobFromAPI = async () => {
    try {
      const response = await fetch(`https://67038f17ab8a8f8927309d88.mockapi.io/lab07_1/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete job');
      }

      console.log('Job deleted:', id);
      navigation.navigate('Details', { refresh: true });
    } catch (error) {
      console.error(error);
      Alert.alert('Có lỗi xảy ra khi xóa công việc.');
    }
  };

  return (
    <View style={styles.container}>
    <View >
                <TouchableOpacity
                
                onPress = {() => navigation.goBack()}
                >
                  <AntDesign name="arrowleft" size={24} color="black" style = {{top : 10,}} />
                </TouchableOpacity>
              </View>
      <View style={{ flex: 1, justifyContent: 'space-between', }}>
        <Text style={{ fontSize: 20, marginBottom: 20, marginTop : 20, }}>Edit Job</Text>

        <TextInput
          style={{
            borderWidth: 1, borderRadius: 5, borderColor: 'gray',
            height: 40, marginBottom: 20,
          }}
          placeholder="Job Title"
          value={jobTitle}
          onChangeText={setJobTitle}
        />

        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
          <TouchableOpacity style={{
            backgroundColor: 'rgba(0, 189, 214, 1)',
            justifyContent: 'center', alignItems: 'center',
            padding: 10, borderRadius: 5
          }}
            onPress={updateJobInAPI}
          >
            <Text style={{ color: 'white' }}>Update Job</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: 'rgba(255, 0, 0, 1)',
            justifyContent: 'center', alignItems: 'center',
            padding: 10, borderRadius: 5
          }}
            onPress={deleteJobFromAPI}
          >
            <Text style={{ color: 'white' }}>Delete Job</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown : false}} />
        <Stack.Screen name="Add" component={AddScreen} options={{headerShown : false}} />
        <Stack.Screen name="EditDelete" component={EditDeleteScreen} options={{headerShown : false}} />
        </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor : 'white',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'rgba(222, 225, 230, 0.47)',
    backgroundColor : 'rgba(222, 225, 230, 0.47)',
  },
  checkbox: {
    marginRight: 10,
  },
});
