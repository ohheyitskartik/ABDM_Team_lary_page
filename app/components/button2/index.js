import PropTypes from 'prop-types';
import { Pressable, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const Button2 = ({ onPress, text }) => {
    return (
        <Pressable onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{text}</Text>
        </Pressable>
    );
};

export default Button2;

Button2.defaultProps = {
    text: 'Button',
    onPress: undefined,
};

Button2.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
};
