import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'  
import HomeScreen from './pages/Homescreen';
import CreateRoutine from './pages/CreateRoutine';
import ViewRoutines from './pages/ViewRoutines';
import ViewPreviousWorkouts from './pages/ViewPreviousWorkouts';
import Workout from './pages/Workout';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="CreateRoutine" component={CreateRoutine}/>
        <Stack.Screen name="ViewRoutines" component={ViewRoutines}/>
        <Stack.Screen name="ViewPreviousWorkouts" component={ViewPreviousWorkouts}/>
        <Stack.Screen name="Workout" component={Workout}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
