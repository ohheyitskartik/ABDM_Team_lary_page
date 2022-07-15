/* eslint-disable react/prop-types */
import { TextInput, View } from 'react-native';
import React from 'react';
import Text from '../../../../../components/text';
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
    const onTextBoxPress = () => {
        refCallback?.current?.focus();
    };

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
            <Text onPress={onTextBoxPress} fontType="extra-bold" style={styles.overlayText}>
                {value}
            </Text>
        </View>
    );
};

export default SquareTextInput;
