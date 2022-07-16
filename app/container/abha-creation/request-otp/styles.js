import { StyleSheet } from 'react-native';
import { grey, lightGrey } from '../../../../colors';
import { scale, verticalScale } from '../../../../utils';

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flex: 1,
    },
    nineOneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: lightGrey,
        paddingHorizontal: scale(7),
        paddingVertical: scale(12),
        borderRadius: scale(10),
    },
    textInputContainer: {
        width: '75%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        position: 'relative',
        borderRadius: scale(10),
        marginHorizontal: scale(5),
        borderColor: grey,
    },
    contentContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: '#fff',
        paddingVertical: scale(20),
        paddingHorizontal: scale(15),
        margin: scale(20),
        borderRadius: scale(15),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    upperTextView: {
        marginBottom: scale(20),
    },
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    textInput: {
        height: verticalScale(30),
        fontSize: scale(14),
        paddingLeft: scale(15),
        color: '#252525',
        width: '60%',
        padding: 10,
    },
    OTPButton: {
        width: '40%',
        marginVertical: scale(10),
        marginBottom: 50,
    },
    tickImage: {
        height: scale(20),
        width: scale(20),
        position: 'absolute',
        right: 10,
    },
});

export default styles;
