import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../container/home';
import TrackerScreen from '../container/tracker';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tracker" component={TrackerScreen} />
        </Stack.Navigator>
    );
};

export default MainStack;
