import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useLinkDevice, useSteps } from './hooks';

const Tracker = () => {
    const { initHealthKit } = useLinkDevice();
    const { syncAppleHealth, isFetched, data } = useSteps();

    const { uid } = auth().currentUser;

    useEffect(() => {
        if (isFetched) {
            console.log('Data', data);
            database()
                .ref(`/users/u_${uid}/data`)
                .update(data)
                .then(() => console.log('Data set.'));
        }
    }, [isFetched]);

    return (
        <View>
            <Button title="Connect" onPress={initHealthKit} />
            <Button title="Get Steps" onPress={syncAppleHealth} />
            <Text>Tracker</Text>
        </View>
    );
};

export default Tracker;

const styles = StyleSheet.create({});
