import { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { checkForValidNumber } from '../../../../utils';

export const useRequestOTP = () => {
    const tickScaleAnim = useRef(new Animated.Value(0)).current;
    const [mobileNumber, setMobileNumber] = useState('');
    const [isTick, setIsTick] = useState(false);

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
    return {
        tickScaleAnim,
        mobileNumber,
        onInputValueChange,
        isTick,
    };
};
