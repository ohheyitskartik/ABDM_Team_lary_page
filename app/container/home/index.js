import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Home = () => {
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
        </View>
    );
};

export default Home;
