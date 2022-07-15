import { StyleSheet } from 'react-native';
import {
    black,
    white,
    blackMatte,
    lightGrey,
    blueberry,
    purpleTint,
} from '../../../../../../colors';
import { scale, verticalScale } from '../../../../../../utils';

export default StyleSheet.create({
    healthIdTextInput: {
        backgroundColor: white,
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(10),
        fontSize: scale(16),
        borderTopLeftRadius: scale(8),
        borderBottomLeftRadius: scale(8),
        width: '80%',
        color: black,
        borderWidth: 1,
        borderColor: blueberry,
    },
    textFieldView: {
        marginVertical: verticalScale(10),
    },
    ndhmTextInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    ndhmView: {
        backgroundColor: purpleTint,
        paddingVertical: verticalScale(13),
        paddingHorizontal: scale(10),
        fontSize: scale(16),
        borderTopRightRadius: scale(8),
        borderBottomRightRadius: scale(8),
        borderWidth: 1,
        borderColor: blueberry,
    },
    healthIdCorrectTick: {
        position: 'absolute',
        right: scale(80),
        backgroundColor: white,
    },
    textInputHeader: {
        marginBottom: scale(10),
    },
    textInputBorder: {
        borderWidth: 1,
        width: '80%',
        borderColor: lightGrey,
        height: '90%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
});
