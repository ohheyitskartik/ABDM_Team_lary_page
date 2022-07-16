import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import styles from './styles';

const Home = () => {
    const signOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };

    console.log(auth().currentUser);

    useEffect(() => {
        // database()
        //     .ref('/users/u7007682448')
        //     .once('value')
        //     .then((snapshot) => {
        //         console.log('User data: ', snapshot.val());
        //     });
        // database()
        //     .ref('/users/u7007682448')
        //     .update({
        //         name: 'Muazzam',
        //     })
        //     .then(() => console.log('Data set.'));
    }, []);

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
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
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
};

export default Home;
