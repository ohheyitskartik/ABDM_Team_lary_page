import { StyleSheet } from 'react-native';
import { splashViolet } from '../../../colors';
import { scale, verticalScale } from '../../../utils';

const radius = 10;
const circleSize = 200;
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,

        backgroundColor: 'transparent',
        overflow: 'hidden',
    },

    ripple: {
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        overflow: 'hidden',
        position: 'absolute',
    },
    rippleContainer: {
        height: '100%',
        width: '100%',
    },
    rippleCircle1: {
        borderWidth: circleSize * 4,
        borderRadius: circleSize * 6,
        borderColor: splashViolet,
        position: 'absolute',
        left: scale(20),
        top: verticalScale(50),
        zIndex: 1,
    },
    rippleCircle2: {
        height: circleSize,
        width: circleSize,
        borderWidth: circleSize / 4,
        borderRadius: circleSize / 2,
        margin: -10,
        borderColor: splashViolet,
    },
});

export { styles, radius };
