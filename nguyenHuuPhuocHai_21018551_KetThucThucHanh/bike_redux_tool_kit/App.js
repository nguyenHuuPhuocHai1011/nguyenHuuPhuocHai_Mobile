import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './page/listScreen';
import DetailsScreen from './page/detailScreen';
import AddScreen from './page/add';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={ListScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Add" component={AddScreen} options={{ headerShown: true }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
