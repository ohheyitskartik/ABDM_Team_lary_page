import { StyleSheet } from 'react-native';
import { black, blueberry, white } from '../../../../../../colors';
import { scale, verticalScale } from '../../../../../../utils';

export default StyleSheet.create({
    textInput: {
        backgroundColor: white,
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(10),
        fontSize: scale(16),
        borderRadius: scale(8),
        color: black,
        borderWidth: 1,
        borderColor: blueberry,
    },
    textFieldView: {
        marginVertical: verticalScale(10),
    },
    textInputHeader: {
        marginBottom: scale(10),
    },
});
