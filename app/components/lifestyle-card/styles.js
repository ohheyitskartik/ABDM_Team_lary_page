import { StyleSheet } from 'react-native';
import { scale } from '../../../utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    barContainer: {
        flexDirection: 'row',
        paddingVertical: scale(5),
        alignItems: 'center',
    },
});

export default styles;
