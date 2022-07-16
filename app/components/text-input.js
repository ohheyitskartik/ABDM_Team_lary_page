import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const CustomTextInput = ({ keyboardType, style, value, maxLength, onChangeText, placeholder }) => {
    return (
        <View>
            <TextInput
                keyboardType={keyboardType}
                style={[styles.textInput, style]}
                value={value}
                maxLength={maxLength}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        padding: 14,
        borderRadius: 12,
        borderColor: '#1e91a3',
        fontSize: 16,
        marginVertical: 10,
    },
});

CustomTextInput.defaultProps = {
    keyboardType: 'default',
    style: {},
    onChangeText: undefined,
    value: '',
    placeholder: '',
    maxLength: 2000,
};

CustomTextInput.propTypes = {
    keyboardType: PropTypes.string,
    style: PropTypes.object,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
};
