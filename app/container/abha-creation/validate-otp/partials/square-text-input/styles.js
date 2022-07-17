import { StyleSheet } from 'react-native';
import { blackMatte } from '../../../../../../colors';
import { scale } from '../../../../../../utils';

export default StyleSheet.create({
    textInputBox: {
        borderWidth: 1,
        borderColor: '#1e91a3',
        borderRadius: scale(8),
        padding: scale(0),
        width: scale(40),
        height: scale(40),
        textAlign: 'center',
        color: blackMatte,
        fontWeight: 'bold',
        fontSize: scale(20),
        marginBottom: 20,
    },
});
