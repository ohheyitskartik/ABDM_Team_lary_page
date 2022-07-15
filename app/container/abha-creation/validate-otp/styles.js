import { StyleSheet } from 'react-native';
import { blackMatte, blueberry, creamishPurple, grey, white } from '../../../../colors';
import { scale, verticalScale } from '../../../../utils';

export const CIRCLE_RADIUS = scale(24);

export default StyleSheet.create({
    topClose: {
        position: 'absolute',
        top: verticalScale(20),
        right: scale(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: creamishPurple,
        padding: scale(10),
    },
    appLogo: {
        height: scale(20),
        width: scale(90),
        marginRight: scale(5),
    },
    contentContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: white,
        paddingVertical: scale(20),
        paddingHorizontal: scale(15),
        marginVertical: scale(20),
        marginHorizontal: scale(10),
        borderRadius: scale(15),
        shadowColor: blackMatte,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    textInput: {
        width: '20%',
        height: verticalScale(50),
        fontSize: scale(25),
        fontWeight: 'bold',
        letterSpacing: scale(32),
        color: blueberry,
        alignSelf: 'center',
        marginLeft: scale(15),
    },
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: scale(20),
    },
    purpleUnderLine: {
        height: 1,
        width: '100%',
        backgroundColor: blueberry,
    },
    otpSentText: {
        fontSize: scale(11),
        alignSelf: 'flex-start',
        marginTop: scale(10),
    },
    timerText: {
        fontSize: scale(14),
    },
    errorMessage: {
        marginTop: verticalScale(20),
        marginBottom: verticalScale(-8),
    },
    tickImage: {
        height: scale(15),
        width: scale(20),
        marginBottom: verticalScale(-4),
    },
    editStyle: {
        color: blueberry,
        fontSize: scale(11),
        alignSelf: 'flex-start',
        marginTop: scale(10),
        marginLeft: scale(5),
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
    circleCircumference: {
        borderWidth: 3,
        borderColor: grey,
        borderRadius: CIRCLE_RADIUS,
        padding: CIRCLE_RADIUS / 2,
        marginHorizontal: scale(3),
        position: 'relative',
    },
    circleDot: {
        width: scale(7),
        height: scale(7),
        backgroundColor: blueberry,
        borderRadius: scale(10),
        position: 'absolute',
        bottom: CIRCLE_RADIUS / 2 + scale(6),
        right: CIRCLE_RADIUS / 2 + scale(6),
    },
    nextCTAContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextCTA: {
        width: '40%',
    },
});
