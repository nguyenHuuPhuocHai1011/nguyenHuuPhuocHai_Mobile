import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBike, fetchBikes } from '../redux/bikeSlice'; 

function AddScreen({ navigation }) {
  const dispatch = useDispatch();
  const [newBike, setNewBike] = useState({
    title: '',
    img: '',
    price: '',
    description: '',
  });

  const handleInputChange = (name, value) => {
    setNewBike({
      ...newBike,
      [name]: value,
    });
  };

  const handleAddBike = async () => {
    try {
      await dispatch(addBike(newBike));

      dispatch(fetchBikes());

      navigation.navigate('List');
    } catch (error) {
      console.error("Error adding bike:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Bike</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={newBike.title}
        onChangeText={(text) => handleInputChange('title', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={newBike.img}
        onChangeText={(text) => handleInputChange('img', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={newBike.price}
        onChangeText={(text) => handleInputChange('price', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description" 
        value={newBike.description}
        onChangeText={(text) => handleInputChange('description', text)} 
      />
      <TouchableOpacity style={styles.button} onPress={handleAddBike}>
        <Text style={styles.buttonText}>Add Bike</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddScreen;
