import React, { useState, useEffect, Alert } from "react";
import { Text, View, Image, Button, TouchableOpacity, StyleSheet, TextInput, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo, AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    setTasks: (state, action) => {
      return action.payload;
    },
    addTask: (state, action) => {
      state.push(action.payload); 
    },
    updateTask: (state, action) => {
      const { id, title } = action.payload;
      const existingTask = state.find(task => task.id === id);
      if (existingTask) {
        existingTask.title = title; 
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload); 
    },
  },
});


export const { setTasks, addTask, updateTask, deleteTask } = tasksSlice.actions;
const store = configureStore({ reducer: { tasks: tasksSlice.reducer } });

const Item = ({ item, onEdit }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity style={styles.checkbox} disabled={true}>
        <AntDesign name="checkcircle" size={24} color="green" />
      </TouchableOpacity>

      <Text style={{ flex: 1, fontSize: 14 }}>
        {item.title}
      </Text>

      <TouchableOpacity style={{ marginLeft: 10 }} onPress={onEdit}>
        <Entypo name="edit" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

function HomeScreen({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require("./assets/Image 95.png")} />
      </View>

      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(131, 83, 226, 1)', width: 150, textAlign: 'center' }}>MANAGE YOUR TASK</Text>
        </View>

        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Feather name="mail" size={20} color="black" style={{ left: 30 }} />
          <TextInput
            style={{
              width: "85%", height: 35,
              borderWidth: 1, paddingLeft: 35,
              borderColor: 'gray',
              color: 'gray'
            }}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: '50%', height: 40,
            borderWidth: 1, borderRadius: 20,
            borderColor: 'background: rgba(0, 189, 214, 1)',
            backgroundColor: 'background: rgba(0, 189, 214, 1)',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => navigation.navigate('Details', { userName: name })}
        >
          <Text style={{ color: 'white' }}>GET STARTED</Text>
        </TouchableOpacity>

        <AntDesign name="arrowright" size={20} color="white" style={{ right: 35 }} />
      </View>
    </View>
  );
}

function DetailsScreen({ navigation, route }) {
  const  userName = route.params?.userName;
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://67038f17ab8a8f8927309d88.mockapi.io/lab07_1')
      .then(response => response.json())
      .then(data => {
        dispatch(setTasks(data)); 
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [dispatch]);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onEdit={() => navigation.navigate('EditDelete', { id: item.id, currentTitle: item.title })}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" style={{ top: 10 }} />
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <Image source={require('./assets/Rectangle.png')} style={{ marginRight: 10, borderRadius: 50, backgroundColor: 'rgba(217, 203, 246, 1)' }} />
          <View>
            <Text style={{ fontSize: 20 }}>Hi {userName}</Text>
            <Text>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.75, flexDirection: 'row' }}>
        <Entypo name="magnifying-glass" size={24} color="black" style={{ left: 30, top: 5 }} />
        <TextInput
          style={{
            borderWidth: 1, borderRadius: 5, borderColor: 'gray',
            width: "85%", height: 35,
            paddingLeft: 30
          }}
          placeholder="Search"
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

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0, 189, 214, 1)',
            borderColor: 'rgba(0, 189, 214, 1)',
            width: 50, height: 50,
            justifyContent: 'center', alignItems: 'center',
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate('Add', userName)}
        >
          <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function AddScreen({ navigation, route }) {
  const userName = route.params;
  const [jobTitle, setJobTitle] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

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
      dispatch(addTask(data));
      navigation.navigate('Details', { userName, refresh: true });
    } catch (error) {
      console.error(error);
      setError('Có lỗi xảy ra khi thêm công việc.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: "row" }}>
          <Image source={require('./assets/Rectangle.png')} style={{ marginRight: 10, borderRadius: 50, backgroundColor: 'rgba(217, 203, 246, 1)' }} />
          <View>
            <Text style={{ fontSize: 20 }}>Hi {userName}</Text>
            <Text>Add new job</Text>
          </View>
        </View>
      </View>

      <TextInput
        style={{
          width: "95%", height: 35,
          borderWidth: 1, borderColor: 'gray',
          paddingLeft: 10,
          borderRadius: 5,
          marginBottom: 10
        }}
        placeholder="Enter job title"
        value={jobTitle}
        onChangeText={setJobTitle}
      />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(0, 189, 214, 1)',
          width: 100, height: 40,
          justifyContent: 'center', alignItems: 'center',
          borderRadius: 5,
        }}
        onPress={() => {
          if (jobTitle.trim()) {
            addJobToAPI(jobTitle);
          } else {
            setError('Vui lòng nhập tiêu đề công việc.');
          }
        }}
      >
        <Text style={{ color: 'white' }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

function EditDeleteScreen({ navigation, route }) {
  const { id, currentTitle } = route.params;
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState(currentTitle);

  const updateJobInAPI = async (updatedJob) => {
    try {
      const response = await fetch(`https://67038f17ab8a8f8927309d88.mockapi.io/lab07_1/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: updatedJob }),
      });

      if (!response.ok) {
        throw new Error('Failed to update job');
      }

      const data = await response.json();
      dispatch(updateTask({ id, title: newTitle })); 
      navigation.navigate('Details');
    } catch (error) {
      console.error(error);
    }
  };

  const deleteJobFromAPI = async () => {
    try {
      await fetch(`https://67038f17ab8a8f8927309d88.mockapi.io/lab07_1/${id}`, {
        method: 'DELETE',
      });
      dispatch(deleteTask(id));
      navigation.navigate('Details');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          width: "95%", height: 35,
          borderWidth: 1, borderColor: 'gray',
          paddingLeft: 10,
          borderRadius: 5,
          marginBottom: 10
        }}
        value={newTitle}
        onChangeText={setNewTitle}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(0, 189, 214, 1)',
          width: 100, height: 40,
          justifyContent: 'center', alignItems: 'center',
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => updateJobInAPI(newTitle)}
      >
        <Text style={{ color: 'white' }}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          width: 100, height: 40,
          justifyContent: 'center', alignItems: 'center',
          borderRadius: 5,
        }}
        onPress={deleteJobFromAPI}
      >
        <Text style={{ color: 'white' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Add" component={AddScreen} />
          <Stack.Screen name="EditDelete" component={EditDeleteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  checkbox: {
    marginRight: 10,
  },
});
