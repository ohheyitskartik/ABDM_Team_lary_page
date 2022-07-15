import { StyleSheet } from 'react-native';
import { scale } from '../../../../../../utils';

export default StyleSheet.create({
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(20),
    },
    timerText: {
        fontSize: scale(14),
    },
    otpTimerContainer: {
        marginTop: scale(15),
        justifyContent: 'center',
    },
    resendOtpBtn: {
        marginLeft: scale(8),
    },
    resendOTPText: {
        textDecorationLine: 'underline',
    },
});
