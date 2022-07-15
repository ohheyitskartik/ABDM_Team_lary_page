import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../container/home';
import React from 'react';

const Stack= createStackNavigator();

const MainStack=()=>{
    return(
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    );
}

export default MainStack;