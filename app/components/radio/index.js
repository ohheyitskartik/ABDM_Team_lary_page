/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, ViewPropTypes } from 'react-native';
import Text from '../text';
import style from './styles';

import { white, blueberry } from '../../../colors';

const RadioButton = ({
    size,
    selected,
    onPress,
    color,
    filled,
    colorSelected,
    label,
    labelStyle,
    borderWidth,
    fontSize,
    outerCircleStyle,
    disabled,
}) => {
    const innerCircleSize = size / 2;
    return (
        <TouchableOpacity
            style={style.container}
            onPress={onPress}
            disabled={disabled}
            testID="components-radio-touchableopacity-0"
            accessibilityLabel="components-radio-touchableopacity-0">
            <View
                style={[
                    style.outerCircle,
                    {
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        borderColor: selected ? colorSelected : color,
                        backgroundColor: filled ? color : white,
                        borderWidth,
                    },
                    outerCircleStyle,
                ]}
                testID="components-radio-view-1"
                accessibilityLabel="components-radio-view-1">
                {selected && !filled ? (
                    <View
                        style={{
                            width: innerCircleSize,
                            height: innerCircleSize,
                            borderRadius: innerCircleSize / 2,
                            borderColor: colorSelected,
                            backgroundColor: colorSelected,
                        }}
                        testID="components-radio-view-2"
                        accessibilityLabel="components-radio-view-2"
                    />
                ) : null}
            </View>
            {label ? (
                <Text
                    fontType="regular"
                    style={[{ marginLeft: 12, flex: 1, fontSize }, labelStyle]}
                    testID="components-radio-text-3"
                    accessibilityLabel="components-radio-text-3">
                    {label}
                </Text>
            ) : null}
        </TouchableOpacity>
    );
};

RadioButton.propTypes = {
    size: PropTypes.number,
    selected: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
    filled: PropTypes.bool,
    colorSelected: PropTypes.string,
    label: PropTypes.string,
    labelStyle: PropTypes.objectOf(PropTypes.shape),
    borderWidth: PropTypes.number,
    fontSize: PropTypes.number,
    outerCircleStyle: ViewPropTypes.style,
    disabled: PropTypes.bool,
};

RadioButton.defaultProps = {
    size: 20,
    selected: false,
    color: blueberry,
    filled: false,
    colorSelected: blueberry,
    labelStyle: {},
    borderWidth: 2,
    fontSize: 12,
    label: '',
    outerCircleStyle: {},
    disabled: false,
};

export default RadioButton;
