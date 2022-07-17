/* eslint-disable react/prop-types */
import { TextInput, View } from 'react-native';
import React from 'react';
import styles from './styles';

const SquareTextInput = ({
    maxLength,
    allowFontScaling,
    keyboardType,
    value,
    autoFocus,
    onChangeText,
    onKeyPress,
    refCallback,
    onSubmitEditing,
}) => {
    return (
        <View>
            <TextInput
                maxLength={maxLength}
                allowFontScaling={allowFontScaling}
                keyboardType={keyboardType}
                value={value}
                autoFocus={autoFocus}
                onChangeText={onChangeText}
                onKeyPress={onKeyPress}
                ref={refCallback}
                onSubmitEditing={onSubmitEditing}
                style={styles.textInputBox}
            />
        </View>
    );
};

export default SquareTextInput;
