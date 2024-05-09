import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyCalendar from './Screens/Screen1';
import Rectangles from './Screens/Screen2';
import StreakScreen from './Screens/Screen3';
import ThreeItemsInRow from './Screens/Screen4';


const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontWeight: 'bold' },
          tabBarIndicatorStyle: { backgroundColor: 'red' },
          tabBarStyle: { marginTop: 40 },  
        }}
      >
        <Tab.Screen name="Screen1" component={MyCalendar} />
        <Tab.Screen name="Screen2" component={Rectangles}/>
        <Tab.Screen name="Screen3" component={StreakScreen}/>
        <Tab.Screen name="Screen4" component={ThreeItemsInRow}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
