import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './app/routes/routes';

const App = () => {
    return (
        <NavigationContainer initialRouteName="Home">
            <MainStack />
        </NavigationContainer>
    );
};

export default App;
