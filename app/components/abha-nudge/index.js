import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import abha from '../../../assets/animations/abha.json';
import Text from '../text';

const AbhaNudge = ({ imgUrl }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Request OTP')}
            style={styles.container}>
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
                <Text fontType="bold">
                    {imgUrl ? 'Share your Report Using ABHA!' : 'Create your ABHA Now'}
                </Text>
                <Text size={12} color="#747373">
                    Share with a specialist to get a opinon now
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default AbhaNudge;
