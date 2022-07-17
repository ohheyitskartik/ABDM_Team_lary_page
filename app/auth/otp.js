import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LottieView from 'lottie-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import otpAnimation from '../../res/animations/lock.json';
import Button2 from '../components/button2';
import { useValidateOTP } from '../container/abha-creation/validate-otp/hooks';
import SquareTextInput from '../container/abha-creation/validate-otp/partials/square-text-input';
import { scale } from '../../utils';

const OTP = () => {
    const route = useRoute();
    const { confirm, number } = route.params;

    const {
        otpRefArray,
        otpArray,
        onInputValueChange,
        handleBackSpacePress,
        onSubmit,
        handleChangeNumber,
    } = useValidateOTP({ mobileNumber: number, screenName: 'OTP', confirm: confirmCode });

    async function confirmCode(code) {
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    return (
        <KeyboardAwareScrollView style={styles.loginContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.lottieContainer}>
                    <LottieView source={otpAnimation} autoPlay loop />
                </View>
                <View style={styles.loginText}>
                    <Text style={styles.mainText}>Enter OTP</Text>
                    <Text style={styles.subText}>
                        Enter six-digit verification code that you received on your number
                    </Text>
                </View>
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
                <Button2 onPress={onSubmit} text="Submit" />
            </View>
        </KeyboardAwareScrollView>
    );
};

export default OTP;

const styles = StyleSheet.create({
    loginContainer: { backgroundColor: 'white', flex: 1 },
    mainContainer: { marginHorizontal: 25 },
    lottieContainer: { width: '110%', height: 460, alignSelf: 'center' },
    otpBText: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    loginText: {
        marginTop: -50,
    },
    textInput: {
        borderWidth: 1,
        padding: 14,
        borderRadius: 12,
        borderColor: '#1e91a3',
        fontSize: 16,
        marginVertical: 10,
    },
    btn: {
        backgroundColor: '#2659EA',
        width: 100,
        borderRadius: 14,
    },
    mainText: { fontSize: 30, fontWeight: 'bold' },
    subText: { fontSize: 18, paddingTop: 5, paddingBottom: 20, color: 'gray' },
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(10),
    },
});
