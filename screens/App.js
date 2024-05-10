import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyCalendar from './Screens/Screen1';
import Rectangles from './Screens/Screen2';
import StreakScreen from './Screens/Screen3';
import ThreeItemsInRow from './Screens/Screen4';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={MyCalendar} options={{ title: 'Calendar' }} />
        <Stack.Screen name="Screen2" component={Rectangles} />
        <Stack.Screen name="Screen3" component={StreakScreen} options={{ title: 'Streak' }} />
        <Stack.Screen name="Screen4" component={ThreeItemsInRow} options={{ title: 'Previous Record' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
