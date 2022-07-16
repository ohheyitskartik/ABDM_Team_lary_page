import { StyleSheet } from 'react-native';
import { black } from '../../../colors';

const style = StyleSheet.create({
    outerCircle: {
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    topview: { flex: 1, justifyContent: 'flex-end', backgroundColor: black },
});

export default style;
