import { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { checkForValidNumber } from '../../../../utils';
import { generateOtp } from '../../../api/index';

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

    const { mutate: generateOtpMutate, isLoading: otpLoading } = useMutation(
        'generate-otp',
        () => generateOtp(mobileNumber),
        {
            onSuccess: (data) => {
                const { data: { data: { sessionId = '' } = {} } = {} } = data;
                console.log(sessionId);
                navigation.navigate('Validate OTP', {
                    mobileNumber,
                    sessionId,
                });
            },
        },
    );

    const onSubmit = () => {
        generateOtpMutate();
    };

    return {
        tickScaleAnim,
        mobileNumber,
        onInputValueChange,
        isTick,
        onSubmit,
        otpLoading,
    };
};
