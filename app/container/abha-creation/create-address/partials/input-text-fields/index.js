import { View, TextInput } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';
import Text from '../../../../../components/text';
import styles from './styles';

const InputTextFields = ({
    control,
    formErrors,
    keyName,
    inputHeader,
    placeHolder,
    defaultValue = '',
}) => {
    return (
        <>
            <Controller
                name={keyName}
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                    <View style={styles.textFieldView}>
                        <TextInput
                            placeholder={inputHeader}
                            style={styles.textInput}
                            onChangeText={(text) => {
                                return onChange(text);
                            }}
                            onBlur={onBlur}
                            value={String(value)}
                            defaultValue={defaultValue}
                        />
                    </View>
                )}
            />
            {!!formErrors[keyName] && <Text>{formErrors[keyName]?.message}</Text>}
        </>
    );
};

export default InputTextFields;
