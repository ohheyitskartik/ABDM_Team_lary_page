import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLinkDevice, useSteps } from './hooks';

const Tracker = () => {
    const { initHealthKit } = useLinkDevice();
    const { syncAppleHealth, data } = useSteps();
    console.log('DAAATA', data);

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
