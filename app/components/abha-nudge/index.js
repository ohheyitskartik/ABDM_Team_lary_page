import { View } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import styles from './styles';
import abha from '../../../assets/animations/abha.json';
import Text from '../text';

const AbhaNudge = () => {
    return (
        <View style={styles.container}>
            <Lottie
                source={abha}
                style={{
                    height: 60,
                    width: 60,
                }}
                autoPlay
                loop
            />
            <View>
                <Text fontType="bold">Create your ABHA Now</Text>
                <Text size={12} color="#747373">
                    Share with a specialist to get a opinon now
                </Text>
            </View>
        </View>
    );
};

export default AbhaNudge;
