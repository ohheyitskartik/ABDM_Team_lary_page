import { StyleSheet } from 'react-native';
import { white } from '../../../../../../colors';
import { scale } from '../../../../../../utils';

export default StyleSheet.create({
    modalView: {
        backgroundColor: white,
        padding: scale(20),
        borderRadius: scale(20),
    },
    text: {
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
    },
});
