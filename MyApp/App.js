import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharactersListScreen from './screens/CharactersListScreen.js';
import CharactersDetailsScreen from './screens/CharactersDetailsScreen.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Characters List">
        <Stack.Screen name="Characters List" component={CharactersListScreen}/>
        <Stack.Screen name="Characters Details" component={CharactersDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


