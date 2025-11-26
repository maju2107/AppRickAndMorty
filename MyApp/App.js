import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharactersListScreen from './Screens/CharactersListScreen.js';
import CharactersDetailsScreen from './Screens/CharactersDetailsScreen.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Characters List">
        <Stack.Screen name="Characters List" component={CharactersListScreen} options={{headerShow: true, title: ' ', headerStyle :{backgroundColor: 'rgba(7, 43, 89, 1)', height: 0}}}/>
        <Stack.Screen name="Characters Details" component={CharactersDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


