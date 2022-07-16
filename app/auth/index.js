import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import AuthStack from '../routes/auth';
import MainStack from '../routes/routes';

const Auth = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(u) {
        setUser(u);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

        return subscriber; // unsubscribe on unmount
    }, []);
    return <>{user ? <MainStack /> : <AuthStack />}</>;
};

export default Auth;
