/* eslint-disable react-native/no-inline-styles */
import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import moment from 'moment';
import { blueberry, grey } from '../../../../../../colors';
import { scale } from '../../../../../../utils';
import styles from './styles';
import { Text } from '../../../../../components/text';

export const CIRCLE_RADIUS = scale(24);

const CircleOTPTimer = ({ timerDuration, resendOtp }) => {
    const getTimerText = (duration) => {
        const time = moment.duration(duration, 'seconds');
        const seconds = time.seconds() < 10 ? `0${time.seconds()}` : time.seconds();
        return `${seconds}`;
    };

    return (
        <View style={[styles.flexContainer, styles.otpTimerContainer]}>
            {timerDuration > 0 && getTimerText(timerDuration) !== '00' && (
                <View style={styles.flexContainer}>
                    <Text size={12} fontType="bold" color={grey}>
                        Resend OTP in{' '}
                    </Text>
                    <View>
                        <Progress.Circle
                            size={scale(40)}
                            color={blueberry}
                            borderWidth={0}
                            textStyle={styles.timerText}
                            showsText
                            formatText={() => getTimerText(timerDuration)}
                            thickness={4}
                            progress={(timerDuration * 3.33) / 100}
                            unfilledColor={grey}
                        />
                    </View>
                    <Text> seconds</Text>
                </View>
            )}

            {getTimerText(timerDuration) === '00' && (
                <TouchableOpacity
                    style={styles.resendOtpBtn}
                    disabled={timerDuration > 0}
                    onPress={resendOtp}>
                    <Text
                        size={12}
                        color={blueberry}
                        fontType="bold"
                        style={[
                            {
                                opacity: timerDuration > 0 ? 0.4 : 1,
                            },
                            styles.resendOTPText,
                        ]}>
                        Resend OTP
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default CircleOTPTimer;
