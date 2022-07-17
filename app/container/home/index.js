import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
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
    const [familyData, setFamilyData] = useState(null);
    const { uid } = auth().currentUser;

    useFocusEffect(
        useCallback(() => {
            database()
                .ref(`/users/u-${uid}/family-history`)
                .once('value')
                .then((snapshot) => {
                    setFamilyData(snapshot.val());
                });
        }, []),
    );

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
            <Button title="Ambee" onPress={() => navigation.navigate('Ambee')} />
            <Button
                title="Family Form"
                onPress={() =>
                    navigation.navigate('Family Form', {
                        familyData,
                    })
                }
            />
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
};

export default Home;
