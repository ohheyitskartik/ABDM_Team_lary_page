import { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { checkForValidNumber } from '../../../../utils';
import { abdmApis } from '../../../apis';
import { variables } from '../../../../env-config';

export const useRequestOTP = () => {
    const tickScaleAnim = useRef(new Animated.Value(0)).current;
    const [mobileNumber, setMobileNumber] = useState('');
    const [isTick, setIsTick] = useState(false);
    const navigation = useNavigation();
    const tickAnimationConfig = {
        toValue: 1,
        duration: 800,
        useNativeDriver: false,
    };

    const tickCheck = (val) => {
        if (val?.length === 10) {
            setIsTick(true);
        } else {
            setIsTick(false);
        }
    };

    useEffect(() => {
        if (isTick) {
            Animated.timing(tickScaleAnim, tickAnimationConfig).start();
        } else {
            tickScaleAnim.setValue(0);
        }
    }, [isTick]);
    const onInputValueChange = (val) => {
        tickCheck(val);
        // if (errorMessage?.length >= 3) {
        //     validityCheck();
        // }
        setMobileNumber(checkForValidNumber(val?.trim()));
    };
    const { accessToken } = useRefreshToken();
    const generateOtp = (value) =>
        axios({
            method: 'post',
            url: abdmApis.generateOtp,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            data: {
                value,
                authMode: variables.auth_mode,
            },
        }).catch((err) => console.log(err));

    const { mutate: generateOtpMutate } = useMutation(
        'generate-otp',
        (value) => generateOtp(value),
        {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (error) => {
                console.log(error, 'Enei');
            },
        },
    );

    const onSubmit = () => {
        console.log('here');
        navigation.navigate('ValidateOTP');
    };

    return {
        tickScaleAnim,
        mobileNumber,
        onInputValueChange,
        isTick,
        onSubmit,
    };
};

export const useRefreshToken = () => {
    const refreshToken = () =>
        axios({
            method: 'post',
            url: abdmApis.refreshSession,
            data: {
                clientId: variables.clientId,
                clientSecret: variables.clientSecret,
            },
        });

    const { data: { data: { accessToken = '' } = {} } = {} } = useQuery(
        'refresh-token',
        () => refreshToken(),
        {
            onSuccess: (data) => {
                console.log(data, 'data', abdmApis.refreshSession);
            },
            onError: (err) => {
                console.log('Error', err);
            },
        },
    );
    console.log('accessToken', accessToken);
    return {
        accessToken,
    };
};
