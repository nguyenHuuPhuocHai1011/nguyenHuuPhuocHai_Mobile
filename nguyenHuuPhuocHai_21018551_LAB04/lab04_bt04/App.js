import React, { useState } from 'react';
import { View, StyleSheet, Dimensions , Text, TextInput, Checkbox, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const [password, setPassword] = useState('');
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const [checkedLowercase, setCheckedLowercase] = useState(false);
  const [checkedUppercase, setCheckedUppercase] = useState(false);
  const [checkedNumbers, setCheckedNumbers] = useState(false);
  const [checkedSymbols, setCheckedSymbols] = useState(false);

  const [showResults, setShowResults] = useState(false); // Control showing the results after button click

  const generatePassword = () => {
    // Reset all checked states to false before validating
    setCheckedLowercase(false);
    setCheckedUppercase(false);
    setCheckedNumbers(false);
    setCheckedSymbols(false);
    setShowResults(true); // Show the results only after button click

    if (password.length === 0) {
      Alert.alert('Error', 'Please enter a password');
      return;
    }

    let valid = true;

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
      setCheckedLowercase(true);
    } else if (includeLowercase) {
      valid = false;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
      setCheckedUppercase(true);
    } else if (includeUppercase) {
      valid = false;
    }

    // Check for numbers
    if (/\d/.test(password)) {
      setCheckedNumbers(true);
    } else if (includeNumbers) {
      valid = false;
    }

    // Check for special symbols
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setCheckedSymbols(true);
    } else if (includeSymbols) {
      valid = false;
    }

    if (valid) {
      Alert.alert('Success', 'Password is valid!');
    } else {
      Alert.alert('Password Validation', 'Password does not meet all the requirements.');
    }
  };
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <LinearGradient
        colors={['#6E6ECB','#4E4EAD', '#3B3B98', '#4E4EAD', '#6E6ECB']}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        start={[1, 0]}
        end={[1, 1]}
        
      >
        <View style={{
          width: '95%',
          height: '95%',
          borderColor: 'rgba(35, 35, 91, 1)',
          borderWidth: 10,
          borderRadius: 20,
          backgroundColor: 'rgba(35, 35, 91, 1)',
          justifyContent: 'center',
        }}>
        
          <View style = {{
            flex : 0.75,
            justifyContent : 'center',
            alignItems : 'center'
          }}>
          <Text style = {{ fontSize : 24, fontWeight : 'bold', color : 'white',}}>PASSWORD</Text>
          <Text style = {{ fontSize : 24, fontWeight : 'bold', color : 'white',}}>GENERATOR</Text>
          </View>

          <View style = {{
            flex : 0.5,
            backgroundColor : 'white',
          }}>
          <TextInput
            style={{
              fontSize: 24,
              marginBottom: 20,
              textAlign: 'center'}}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              secureTextEntry={true}
          />
          </View>

          <View style = {{
            flex : 2,

          }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
                justifyContent : 'space-between'
              }}>
                  <Text style={{fontSize: 18,marginRight: 10,}}>Password length:</Text>
                  <View style={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                    borderRadius: 5,
                    backgroundColor: '#f0f0f0',
                  }}>
                  <Text style={{fontSize: 18, fontWeight: 'bold',}}>{password.length}</Text>
                </View>
              </View>

              

      <Button title="GENERATE PASSWORD" onPress={generatePassword} />
          
          </View>

          <View style = {{
            flex : 0.75,

          }}></View>
        
        </View>
      </LinearGradient>
    </View>
  );
}

