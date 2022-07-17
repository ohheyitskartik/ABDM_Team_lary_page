import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../container/home';
import RequestOTPScreen from '../container/abha-creation/request-otp';
import ValidateOTPScreen from '../container/abha-creation/validate-otp';
import AbhaSelectorScreen from '../container/abha-creation/abha-address-selector';
import CreateAbhaAddressScreen from '../container/abha-creation/create-address';
import TrackerScreen from '../container/tracker';
import Dashboard from '../container/dashboard';
import AmbeeScreen from '../container/ambee';
import FamilyFormScreen from '../container/family-form';
import AbhaDetailsScreen from '../container/abha-creation/abha-details';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Request OTP" component={RequestOTPScreen} />
            <Stack.Screen name="Validate OTP" component={ValidateOTPScreen} />
            <Stack.Screen name="Select Abha Address" component={AbhaSelectorScreen} />
            <Stack.Screen name="Create your Abha Address" component={CreateAbhaAddressScreen} />
            <Stack.Screen name="Tracker" component={TrackerScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="Ambee" component={AmbeeScreen} />
            <Stack.Screen name="Family Form" component={FamilyFormScreen} />
            <Stack.Screen name="My ABHA" component={AbhaDetailsScreen} />
        </Stack.Navigator>
    );
};

export default MainStack;
