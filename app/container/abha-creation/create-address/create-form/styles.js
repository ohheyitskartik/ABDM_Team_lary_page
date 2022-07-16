import { StyleSheet } from 'react-native';
import { black, white } from '../../../../../colors';
import { scale, verticalScale } from '../../../../../utils';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        marginTop: verticalScale(15),
        paddingHorizontal: scale(15),
    },
    buttonView: {
        marginTop: scale(15),
        width: '90%',
        alignSelf: 'center',
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: black,
        alignSelf: 'center',
    },
    tncView: {
        marginBottom: verticalScale(10),
    },
    textFieldView: {
        marginVertical: verticalScale(10),
    },
    textInput: {
        backgroundColor: white,
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(10),
        fontSize: scale(16),
        borderRadius: scale(8),
        color: black,
    },
    textInputHeader: {
        marginBottom: scale(10),
    },
});
