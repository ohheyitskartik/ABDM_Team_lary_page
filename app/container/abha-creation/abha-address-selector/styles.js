import { creamishPurple, purpleTint, white } from '../../../../colors';
import { scale, verticalScale } from '../../../../utils';

const styles = {
    container: {
        backgroundColor: creamishPurple,
        flex: 1,
    },
    contentContainer: {
        backgroundColor: white,
        borderRadius: 20,
        padding: 25,
        margin: scale(20),
    },
    informationContainer: {
        flexDirection: 'row',
        marginVertical: scale(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    informationIcon: {
        marginRight: scale(3),
    },
    continueButton: {
        width: '70%',
        paddingVertical: scale(15),
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: verticalScale(30),
        marginTop: verticalScale(5),
    },
    helpTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    helpTextLine: { flexDirection: 'row' },
    needHelp: {
        marginBottom: verticalScale(12),
    },
    clickableText: { textDecorationLine: 'underline' },
    termStyle: {
        marginLeft: scale(5),
    },
    checkStyle: {
        borderWidth: 0.5,
    },
    createNewAbhaStyle: { flexDirection: 'row', marginTop: verticalScale(12) },
    continue: { width: '100%', alignItems: 'center', justifyContent: 'center' },
    image: {
        height: 60,
        width: 60,
        backgroundColor: purpleTint,
        borderRadius: 50,
        alignSelf: 'center',
        position: 'absolute',
        top: -30,
        color: white,
        marginBottom: verticalScale(30),
        // bottom: 80,
        opacity: 0.75,
    },
    selectorHeading: {
        marginTop: verticalScale(20),
        textAlign: 'center',
    },
};

export default styles;
