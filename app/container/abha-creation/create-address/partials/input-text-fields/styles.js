import { StyleSheet } from 'react-native';
import { black, white } from '../../../../../../colors';
import { scale, verticalScale } from '../../../../../../utils';

export default StyleSheet.create({
    textInput: {
        backgroundColor: white,
        paddingVertical: verticalScale(9),
        paddingHorizontal: scale(10),
        fontSize: scale(16),
        borderRadius: scale(8),
        color: black,
        borderWidth: 1,
        borderColor: '#1e91a3',
    },
    textFieldView: {
        marginVertical: verticalScale(6),
    },
    textInputHeader: {
        marginBottom: scale(10),
    },
});
