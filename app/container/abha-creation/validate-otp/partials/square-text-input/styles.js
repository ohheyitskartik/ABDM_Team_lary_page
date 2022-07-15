import { StyleSheet } from 'react-native';
import { blueberry, grey } from '../../../../../../colors';
import { scale } from '../../../../../../utils';

export default StyleSheet.create({
    textInputBox: {
        backgroundColor: grey,
        borderRadius: scale(8),
        padding: scale(0),
        width: scale(40),
        height: scale(40),
        textAlign: 'center',
        color: grey,
        fontWeight: 'bold',
        fontSize: scale(16),
    },
    overlayText: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: scale(10),
        left: scale(15.5),
        color: blueberry,
        fontSize: scale(16),
    },
});
