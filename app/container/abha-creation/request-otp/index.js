import { View, TextInput, ActivityIndicator, Animated } from 'react-native';
import React from 'react';
import styles from './styles';
import { useRequestOTP } from './hooks';
import { blueberry, green6, grey } from '../../../../colors';
import Button from '../../../components/button';
import Icon from '../../../components/icon';
import Text from '../../../components/text';

export default function RequestOtp() {
    const { tickScaleAnim, mobileNumber, isTick, onInputValueChange, onSubmit, otpLoading } =
        useRequestOTP();
    return (
        <View style={styles.wrapper}>
            <View style={styles.contentContainer}>
                <View style={styles.upperTextView}>
                    <Text style={{ fontWeight: '600', fontSize: 16, padding: 7 }}>
                        Enter your CoWIN linked mobile number
                    </Text>
                    <Text size={12} style={{ padding: 7 }}>
                        {'We will send one time password on this \nnumber'}
                    </Text>
                </View>
                <View style={styles.flexContainer}>
                    <View style={styles.nineOneContainer}>
                        {/* <FastImage source={images.flag} style={styles.flagImg} /> */}
                        <Text color="white" style={styles.nineOneText} fontType="bold">
                            +91
                        </Text>
                    </View>
                    <Animated.View
                        style={[
                            styles.textInputContainer,
                            {
                                borderColor: tickScaleAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [grey, '#1e91a3'],
                                }),
                            },
                        ]}>
                        <TextInput
                            allowFontScaling
                            autoFocus
                            keyboardType="number-pad"
                            returnKeyType="done"
                            style={styles.textInput}
                            maxLength={10}
                            selectTextOnFocus={false}
                            value={mobileNumber}
                            defaultValue={mobileNumber}
                            onSubmitEditing={onSubmit}
                            onChangeText={onInputValueChange}
                            placeholderTextColor={grey}
                            placeholder={mobileNumber}
                        />
                        {!!isTick && (
                            <Animated.View
                                style={[
                                    styles.tickImage,
                                    { transform: [{ scale: tickScaleAnim }] },
                                ]}>
                                <Icon name="checkcircle" variant="AntDesign" color={green6} />
                            </Animated.View>
                        )}
                    </Animated.View>
                </View>
            </View>
            <Button onPress={onSubmit} style={styles.OTPButton} disabled={otpLoading}>
                {otpLoading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Send OTP</Text>
                )}
            </Button>
        </View>
    );
}
