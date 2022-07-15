import { StyleSheet } from 'react-native';
import { scale } from '../../../utils';

import { blueberry } from '../../../colors';

const white = '#fff';
export const styles = StyleSheet.create({
    baseButtonStyle: {
        paddingVertical: scale(10),
        borderRadius: 6,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    outlineBaseButtonStyle: {
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderRadius: 24,
        alignItems: 'center',
    },

    primaryButtonStyle: {
        borderRadius: 100,
        backgroundColor: blueberry,
    },
    primaryButtonTextStyle: {
        color: white,
        textTransform: 'capitalize',
        fontSize: scale(14),
    },

    secondaryButtonStyle: {
        borderRadius: 100,
        backgroundColor: white,
        borderColor: blueberry,
        borderWidth: 1,
    },
    secondaryButtonTextStyle: {
        color: blueberry,
        textTransform: 'capitalize',
        fontSize: scale(14),
    },

    outlineButtonStyle: {
        backgroundColor: white,
        borderWidth: 1,
    },
    outlineButtonTextStyle: { color: white },

    plainButtonStyle: {
        width: '100%',
    },
});
