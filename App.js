import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './app/auth';

const App = () => {
    return (
        <NavigationContainer>
            <Auth />
        </NavigationContainer>
    );
};

export default App;
