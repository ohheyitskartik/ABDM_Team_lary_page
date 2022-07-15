import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useLinkDevice, useSteps } from './hooks';

const Tracker = () => {
    const { initHealthKit } = useLinkDevice();
    const { syncAppleHealth, isFetched, data } = useSteps();

    useEffect(() => {
        if (isFetched) {
            console.log('Data', data);
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
