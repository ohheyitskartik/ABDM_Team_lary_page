import { StyleSheet } from 'react-native';
import { scale } from '../../../utils';

export default StyleSheet.create({
    buttonStyle: {
        marginTop: 10,
        width: '100%',
        height: scale(44),
        backgroundColor: '#1e91a3',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
    },
    textStyle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
});
