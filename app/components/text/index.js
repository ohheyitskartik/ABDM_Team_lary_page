/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleProp, Text, TextStyle, TextProps } from 'react-native';
import PropTypes from 'prop-types';
import { scale } from '../../../utils';

const textTransform = ['capitalize', 'uppercase', 'lowercase', 'none'];
const fontTypes = [
    'light',
    'normal',
    'medium',
    'semi-bold',
    'bold',
    'extra-bold',
    'bold-italic',
    undefined,
];

const TextViewEnhanced = (props) => {
    const {
        size = 14,
        color = '#000',
        fontType = 'normal',
        transform = 'none',
        style = {},
        numberOfLines,
        children,
    } = props;
    return (
        <Text
            maxFontSizeMultiplier={1.2}
            {...props}
            style={[
                {
                    fontWeight: fontType,
                    fontSize: scale(size),
                    color,
                    textTransform: transform,
                },
                style,
            ]}
            numberOfLines={numberOfLines}>
            {children}
        </Text>
    );
};

export default TextViewEnhanced;

TextViewEnhanced.defaultProps = {
    size: 14,
    color: '#000',
    fontType: 'normal',
    transform: 'none',
    style: {},
    numberOfLines: undefined,
};

TextViewEnhanced.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    fontType: PropTypes.oneOf([
        'light',
        'normal',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'bold-italic',
    ]),
    transform: PropTypes.oneOf(['capitalize', 'uppercase', 'lowercase', 'none']),
    style: PropTypes.object,
    numberOfLines: PropTypes.number,
};
