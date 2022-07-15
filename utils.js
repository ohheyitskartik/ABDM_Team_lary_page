import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

const scale = (size) => {
    'worklet';

    return (width / guidelineBaseWidth) * size;
};

const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale, width, height };

const numberRegex = /^[0-9]+$/;
export const checkForValidNumber = (input) => {
    if (numberRegex.test(input)) {
        return input;
    }

    return input.replace(/\D/g, '');
};
