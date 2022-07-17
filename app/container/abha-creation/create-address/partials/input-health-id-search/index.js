import { ActivityIndicator, Animated, TextInput, View } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';
import Icon from '../../../../../components/icon';
import Text from '../../../../../components/text';
import { brandDark, green6 } from '../../../../../../colors';
import styles from './styles';

const InputHealthIdSearch = ({
    control,
    formErrors,
    keyName,
    inputHeader,
    isHealthIdExist,
    isHealthIdCheckSuccess,
    isHealthIdCheckLoading,
    isHealthIdCheckError,
    setHealthIdText,
}) => {
    return (
        <>
            <Controller
                name={keyName}
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                    <View style={styles.textFieldView}>
                        <View style={styles.ndhmTextInputContainer}>
                            <TextInput
                                placeholder={inputHeader}
                                style={styles.healthIdTextInput}
                                autoCapitalize="none"
                                onChangeText={(text) => {
                                    setHealthIdText(text);
                                    return onChange(text.toLowerCase());
                                }}
                                onBlur={onBlur}
                                value={String(value)}
                            />

                            <View style={styles.ndhmView}>
                                <Text color="white" fontType="bold">
                                    @abdm
                                </Text>
                            </View>
                        </View>
                        {(!!formErrors[keyName] ||
                            (isHealthIdExist && isHealthIdCheckSuccess) ||
                            isHealthIdCheckError) && (
                            <Text>
                                {formErrors[keyName]?.message ||
                                    'This ABHA Number is not available, try again!'}
                            </Text>
                        )}
                    </View>
                )}
            />
        </>
    );
};

export default InputHealthIdSearch;
