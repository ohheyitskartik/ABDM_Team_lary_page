import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDebounce } from '../../../../custom-hooks/use-debounce';
// import SecureStorage from 'app/utils/secure-storage';
// import asyncStorageConstants from 'app/constants/async-storage-strings';

import { healthIdFormSchema } from './validation-schema';

const tickAnimationConfig = {
    toValue: 1,
    duration: 800,
    useNativeDriver: false,
};

export const useCreateId = () => {
    const navigation = useNavigation();
    const [healthIdDetails, setHealthIdDetails] = useState({});
    const [glob, setGlob] = useState(undefined);

    const { params: { token = '', mobileNumber = '' } = {} } = useRoute();

    const tickScaleAnim = useRef(new Animated.Value(0)).current;
    const [isTick, setIsTick] = useState(false);
    const [healthIdText, setHealthIdText] = useState('');
    const deboucedHealthIdText = useDebounce(healthIdText, 1000);
    const [isHealthIdModalVisible, setIsHealthIdModalVisible] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors: formErrors, isValid: isFormValid },
    } = useForm({
        resolver: yupResolver(healthIdFormSchema),
        reValidateMode: 'onChange',
        mode: 'onChange',
        defaultValues: {
            imageBase64: '',
            healthId: '',
            firstName: '',
            lastName: '',
            dateOfBirth: {
                year: moment().year().toString(),
            },
            gender: 'M',
            pin: '',
        },
    });

    // const settingAsync = async (healthId, tokenForHealthId) => {
    //     try {
    //         await SecureStorage.setItem(asyncStorageConstants.HEALTH_ADDRESS, healthId);
    //         await SecureStorage.setItem(asyncStorageConstants.ABHA_TOKEN, tokenForHealthId);
    //     } catch (err) {
    //         errorLogger.log('Error', err);
    //     }
    // };

    // useEffect(() => {
    //     if (deboucedHealthIdText) {
    //         checkExistHealthID({ healthId: deboucedHealthIdText });
    //     }
    // }, [deboucedHealthIdText]);

    const onCreateHealthIdFormSubmit = async (formData) => {
        setGlob(formData);
        const { pin } = formData || {};
        // fetchPincodeDetails(pin);
    };

    useEffect(() => {
        if (isTick) {
            Animated.timing(tickScaleAnim, tickAnimationConfig).start();
        } else {
            tickScaleAnim.setValue(0);
        }
    }, [isTick]);

    const handleErrorModalClose = () => {
        setIsHealthIdModalVisible(false);
    };

    return {
        control,
        isFormValid,
        tickScaleAnim,
        formErrors,
        isHealthIdModalVisible,
        setHealthIdText,
        handleSubmit,
        onCreateHealthIdFormSubmit,
        handleErrorModalClose,
    };
};
