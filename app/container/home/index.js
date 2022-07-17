import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import Permission from './permission';

const Home = () => {
    const signOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Permission />
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Request OTP')}
                style={styles.requestOtp}>
                <Text>Request OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Validate OTP')}
                style={styles.requestOtp}>
                <Text>Validate OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Create your Abha Address')}
                style={styles.requestOtp}>
                <Text>Create your Abha Address</Text>
            </TouchableOpacity>
            <Button title="Tracker" onPress={() => navigation.navigate('Tracker')} />
            <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
            <Button title="Ambee" onPress={() => navigation.navigate('Ambee')} />
            <Button title="HTMLView" onPress={() => navigation.navigate('HTMLView')} />
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
};

export default Home;
