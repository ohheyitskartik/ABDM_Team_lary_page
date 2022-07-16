import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useAmbee } from './hooks';

const Ambee = () => {
    const { data, isFetching } = useAmbee();
    useEffect(() => {
        console.log('Data', isFetching, data);
    }, [isFetching]);
    return (
        <View style={styles.container}>
            <Text>Ambee</Text>
        </View>
    );
};

export default Ambee;

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Roboto',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
