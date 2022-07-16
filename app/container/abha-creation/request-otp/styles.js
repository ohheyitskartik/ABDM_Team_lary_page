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
        backgroundColor: '#1e91a3',

        borderRadius: 12,
        padding: 14,
    },
    textInputContainer: {
        width: '75%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginHorizontal: scale(5),
        borderWidth: 1,
        padding: scale(3),
        borderRadius: 12,
        borderColor: '#1e91a3',
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
        // borderWidth: 1,
    },
    OTPButton: {
        width: '40%',
        marginVertical: scale(10),
        marginBottom: 50,
        backgroundColor: '#1e91a3',
    },
    tickImage: {
        height: scale(20),
        width: scale(20),
        position: 'absolute',
        right: 10,
    },
});

export default styles;
