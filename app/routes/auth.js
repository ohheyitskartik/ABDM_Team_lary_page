import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../auth/login';
import OTPScreen from '../auth/otp';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="OTP" component={OTPScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
