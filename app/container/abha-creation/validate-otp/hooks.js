import { useRef, useState } from 'react';
import BackgroundTimer from 'react-native-background-timer';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from 'react-query';
import { isIOS } from '../../../../utils';
import { validateOtp } from '../../../api';

const OTPConfigs = {
    TIMER_DURATION: 30,
    OTP_REGEX: /^[0-9]+$/,
    INTERVAL: 1000,
};

export const useValidateOTP = ({ confirm, screenName, sessionId, mobileNumber }) => {
    const navigation = useNavigation();
    const [OTP, setOTP] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [otpArray, setOtpArray] = useState(['', '', '', '', '', '']);
    const [errorMessage, setErrorMessage] = useState('');
    const [timerDuration, setTimerDuration] = useState(OTPConfigs.TIMER_DURATION);
    const firstTextInputRef = useRef(null);
    const secondTextInputRef = useRef(null);
    const thirdTextInputRef = useRef(null);
    const fourthTextInputRef = useRef(null);
    const fifthTextInputRef = useRef(null);
    const sixthTextInputRef = useRef(null);

    const otpRefArray = [
        firstTextInputRef,
        secondTextInputRef,
        thirdTextInputRef,
        fourthTextInputRef,
        fifthTextInputRef,
        sixthTextInputRef,
    ];
    const { mutate: validateOtpMutate, isLoading: verifyLoading } = useMutation(
        'validate-otp',
        () => validateOtp(OTP, sessionId),
        {
            onSuccess: (data) => {
                const { data: { data: { mappedPhrAddress = [] } = {} } = {} } = data;
                if (mappedPhrAddress.length === 0) {
                    navigation.navigate('Create your Abha Address', {
                        sessionId,
                        mobileNumber,
                    });
                } else {
                    navigation.navigate('Select Abha Address', {
                        mobileNumber,
                        mappedPhrAddress,
                        sessionId,
                    });
                }
            },
        },
    );

    const handleSubmit = async (otpValues = OTP) => {
        if (!OTPConfigs.OTP_REGEX.test(otpValues) || otpValues?.length !== 6) {
            setErrorMessage('Please enter a valid 6 digit otp !');
        }

        if (screenName === 'OTP') {
            confirm(otpValues);
        } else {
            validateOtpMutate();
        }
    };

    const validityCheck = () => {
        let isValid = true;
        if (OTP.length < 6) {
            setErrorMessage('Please enter a valid 6 digit otp !');
            isValid = false;
        } else {
            setErrorMessage('');
        }
        return isValid;
    };

    const onInputValueChange = (index, value) => {
        if (isIOS) {
            // check if the value recieved is the 6 digit OTP
            if (value?.length === 6) {
                const splitOTPArray = value?.split('');
                setOtpArray(splitOTPArray); // set otp array to fill the six boxes
                setOTP(value); // set actual OTP in string
                // submit the otp
                handleSubmit(value);
                return;
            }
        }
        const val = value;

        if (Number.isNaN(Number(val))) {
            return;
        }

        const otpArrayCopy = otpArray?.concat();
        otpArrayCopy[index] = val;
        setOtpArray(otpArrayCopy);
        setOTP(otpArrayCopy?.join(''));

        // auto focus to next InputText if value is not blank
        if (val) {
            if (index === 0) {
                secondTextInputRef?.current?.focus();
            } else if (index === 1) {
                thirdTextInputRef?.current?.focus();
            } else if (index === 2) {
                fourthTextInputRef?.current?.focus();
            } else if (index === 3) {
                fifthTextInputRef?.current?.focus();
            } else if (index === 4) {
                sixthTextInputRef?.current?.focus();
            }
        }

        // on index -> 5 i.e the last input box on text change, call submit function to submit otp
        if (index === 5 && val !== '') {
            handleSubmit(otpArrayCopy.join(''));
        }
    };

    const handleBackSpacePress = (e, index) => {
        const { nativeEvent: { key = '' } = {} } = e || {};
        if (key === 'Backspace' && otpArray[index] === '') {
            if (index === 1) {
                firstTextInputRef?.current?.focus();
            } else if (index === 2) {
                secondTextInputRef?.current?.focus();
            } else if (index === 3) {
                thirdTextInputRef?.current?.focus();
            } else if (index === 4) {
                fourthTextInputRef?.current?.focus();
            } else if (index === 5) {
                fifthTextInputRef?.current?.focus();
            }
        }
    };

    const onSubmit = () => {
        if (validityCheck()) {
            handleSubmit();
        }
    };

    const timer = BackgroundTimer.setTimeout(() => {
        if (timerDuration > 0) {
            const newDuration = timerDuration - 1;
            setTimerDuration(newDuration);
        } else {
            BackgroundTimer.clearTimeout(timer);
        }
    }, OTPConfigs.INTERVAL);

    const handleChangeNumber = () => {
        navigation.goBack();
    };

    return {
        errorMessage,
        timerDuration,
        otpRefArray,
        otpArray,
        onInputValueChange,
        handleBackSpacePress,
        onSubmit,
        handleChangeNumber,
        showLoader,
        setShowLoader,
        verifyLoading,
    };
};
