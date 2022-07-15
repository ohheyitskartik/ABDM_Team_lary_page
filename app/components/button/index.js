import React from 'react';
import { StyleSheet, ViewPropTypes, TextStyle } from 'react-native';
import PropTypes from 'prop-types';
import Shimmer from 'react-native-shimmer';
import Text from '../text';
import { styles } from './styles';
import Ripple from '../ripple/index';

const white = '#fff';
const ButtonView = ({
    onPress,
    disabled,
    btnVariantStyle,
    style,
    testID,
    accessibilityLabel,
    withChild,
    children,
    btnVariantTextStyle,
    textStyle,
    activeOpacity,
}) => {
    return (
        <Ripple
            onPress={onPress}
            activeOpacity={activeOpacity}
            disabled={disabled}
            testID={`${testID}-touchable-opacity-0`}
            accessibilityLabel={`${accessibilityLabel}-touchable-opacity-0`}
            style={[styles.baseButtonStyle, btnVariantStyle, style]}>
            {withChild ? (
                children
            ) : (
                <Text
                    fontType="bold"
                    size={14}
                    transform="uppercase"
                    color={white}
                    style={[btnVariantTextStyle, textStyle]}
                    testID={`${testID}-button-text-1`}
                    accessibilityLabel={`${accessibilityLabel}-button-text-1`}>
                    {children}
                </Text>
            )}
        </Ripple>
    );
};

const getButtonStyle = (variant, disabled, withChild) => {
    switch (variant) {
        case 'primary': {
            const conditionalStyles = StyleSheet.create({
                opacity: disabled ? 0.7 : 1,
            });
            return [styles.primaryButtonStyle, styles.primaryButtonTextStyle, conditionalStyles];
        }
        case 'secondary': {
            return [styles.secondaryButtonStyle, styles.secondaryButtonTextStyle];
        }
        case 'outline': {
            const conditionalStyles = withChild
                ? styles.outlineBaseButtonStyle
                : styles.baseButtonStyle;
            return [styles.outlineButtonStyle, styles.outlineButtonTextStyle, conditionalStyles];
        }
        case 'plain': {
            return [styles.plainButtonStyle, styles.plainButtonTextStyle];
        }

        default: {
            return [styles.primaryButtonStyle];
        }
    }
};

const CustomButton = (props) => {
    const {
        testID,
        accessibilityLabel,
        onPress,
        style,
        withChild,
        disabled,
        variant,
        textStyle,
        children,
        activeOpacity,
        effect,
    } = props;

    const [btnVariantStyle, btnVariantTextStyle, conditionalStyles] = getButtonStyle(
        variant,
        disabled,
        withChild,
    );
    const customButtonStyle = { ...btnVariantStyle, ...conditionalStyles };
    return effect === 'shimmer' ? (
        <Shimmer opacity={1} animationOpacity={0.7} duration={1500}>
            <ButtonView
                onPress={onPress}
                disabled={disabled}
                btnVariantStyle={customButtonStyle}
                style={style}
                testID={testID}
                accessibilityLabel={accessibilityLabel}
                withChild={withChild}
                btnVariantTextStyle={btnVariantTextStyle}
                textStyle={textStyle}>
                {children}
            </ButtonView>
        </Shimmer>
    ) : (
        <ButtonView
            onPress={onPress}
            disabled={disabled}
            btnVariantStyle={customButtonStyle}
            style={style}
            testID={testID}
            accessibilityLabel={accessibilityLabel}
            withChild={withChild}
            activeOpacity={activeOpacity}
            btnVariantTextStyle={btnVariantTextStyle}
            textStyle={textStyle}>
            {children}
        </ButtonView>
    );
};

CustomButton.defaultProps = {
    testID: '',
    accessibilityLabel: '',
    onPress: undefined,
    style: {},
    withChild: false,
    disabled: false,
    variant: 'primary',
    textStyle: {},
    children: null,
    activeOpacity: 0.4,
    effect: '',
};

CustomButton.propTypes = {
    testID: PropTypes.string,
    accessibilityLabel: PropTypes.string,
    onPress: PropTypes.func,
    effect: PropTypes.string,
    style: ViewPropTypes.style,
    withChild: PropTypes.bool,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'plain']),
    // WARNING_FIXED : TextPropTypes?.style is undefined
    textStyle: PropTypes.shape(TextStyle),
    children: PropTypes.node,
    activeOpacity: PropTypes.number,
};

ButtonView.defaultProps = {
    testID: '',
    accessibilityLabel: '',
    onPress: undefined,
    style: {},
    withChild: false,
    disabled: false,
    textStyle: {},
    children: null,
    btnVariantStyle: {},
    btnVariantTextStyle: {},
    activeOpacity: 0.4,
};

ButtonView.propTypes = {
    testID: PropTypes.string,
    accessibilityLabel: PropTypes.string,
    onPress: PropTypes.func,
    style: ViewPropTypes.style,
    withChild: PropTypes.bool,
    disabled: PropTypes.bool,
    // WARNING_FIXED: TextPropTypes?.style is undefined
    textStyle: PropTypes.shape(TextStyle),
    children: PropTypes.node,
    btnVariantStyle: PropTypes.object,
    btnVariantTextStyle: PropTypes.object,
    activeOpacity: PropTypes.number,
};

export default CustomButton;
