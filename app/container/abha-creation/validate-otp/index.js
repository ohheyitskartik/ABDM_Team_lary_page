import { TouchableOpacity, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import SquareTextInput from './partials/square-text-input';
import { useValidateOTP } from './hooks';
import Button from '../../../components/button';
import Text from '../../../components/text';
import { white } from '../../../../colors';

const ValidateOTP = () => {
    const route = useRoute();
    const { mobileNumber = '', sessionId = '' } = route.params;
    const {
        otpRefArray,
        otpArray,
        onInputValueChange,
        handleBackSpacePress,
        onSubmit,
        handleChangeNumber,
        verifyLoading,
    } = useValidateOTP({ sessionId, mobileNumber });

    return (
        <>
            <View style={styles.contentContainer}>
                <Text fontType="bold" size={16}>
                    Enter OTP
                </Text>
                <Text size={12} fontType="medium">
                    Enter six-digit verification code that you received on your number
                </Text>
                <View style={styles.flexContainer}>
                    {otpRefArray.map((textInputRef, index) => (
                        <SquareTextInput
                            allowFontScaling
                            keyboardType="numeric"
                            value={otpArray[index]}
                            autoFocus={index === 0}
                            onChangeText={(val) => onInputValueChange(index, val)}
                            onKeyPress={(e) => handleBackSpacePress(e, index)}
                            refCallback={textInputRef}
                            onSubmitEditing={onSubmit}
                        />
                    ))}
                </View>
                <View style={styles.flexContainer}>
                    <Text style={styles.otpSentText}> OTP sent to +91{mobileNumber}</Text>
                    <TouchableOpacity onPress={handleChangeNumber}>
                        <Text fontType="semi-bold" style={styles.editStyle}>
                            Change Number
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.nextCTAContainer}>
                <Button style={styles.nextCTA} onPress={onSubmit}>
                    {verifyLoading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text color={white} fontType="bold">
                            Next
                        </Text>
                    )}
                </Button>
            </View>
        </>
    );
};

export default ValidateOTP;
