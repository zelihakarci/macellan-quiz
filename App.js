import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Purses from './src/screens/Purses';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Purses" component={Purses} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
