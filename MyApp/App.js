import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharactersListScreen from './Screens/CharactersListScreen.js';
import CharactersDetailsScreen from './Screens/CharactersDetailsScreen.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CharactersList">
        <Stack.Screen name="CharactersList" component={CharactersListScreen} options={{headerShow: true, title: ' ', headerStyle :{backgroundColor: '#97ce4c', height: 0}}}/>
        <Stack.Screen name="CharactersDetails" component={CharactersDetailsScreen} options={{headerStyle :{backgroundColor: 'rgba(177, 205, 232, 1)'}, title: ' Characters  Details'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


