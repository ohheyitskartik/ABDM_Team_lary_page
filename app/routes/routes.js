import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../container/home';
import RequestOTPScreen from '../container/abha-creation/request-otp';
import ValidateOTPScreen from '../container/abha-creation/validate-otp';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="RequestOTP" component={RequestOTPScreen} />
            <Stack.Screen name="ValidateOTP" component={ValidateOTPScreen} />
        </Stack.Navigator>
    );
};

export default MainStack;
