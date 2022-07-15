import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';

const Home = () => {
    const signOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Tracker" onPress={() => navigation.navigate('Tracker')} />
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
};

export default Home;
