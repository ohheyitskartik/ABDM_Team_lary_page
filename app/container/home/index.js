import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
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
            <Button title="Tracker" onPress={() => navigation.navigate('Tracker')} />
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
};

export default Home;
