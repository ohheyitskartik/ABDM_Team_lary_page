import { StyleSheet } from 'react-native';
import { height, width } from '../../../utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
        position: 'absolute',
        height,
        width,
        zIndex: -1,
    },
});

export default styles;
