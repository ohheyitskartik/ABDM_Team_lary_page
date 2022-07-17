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
    tickScaleAnim,
    setHealthIdText,
    separate = false,
}) => {
    const Wrapper = separate ? View : React.Fragment;
    return (
        <>
            <Controller
                name={keyName}
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                    <View style={styles.textFieldView}>
                        <View style={styles.ndhmTextInputContainer}>
                            <Wrapper style={[separate && styles.textInputBorder]}>
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
                            </Wrapper>

                            {isHealthIdCheckLoading && (
                                <View style={styles.healthIdCorrectTick}>
                                    <ActivityIndicator color={brandDark} />
                                </View>
                            )}
                            <View style={styles.ndhmView}>
                                <Text color="white" fontType="bold">
                                    @abdm
                                </Text>
                            </View>
                        </View>
                        {(!!formErrors[keyName] ||
                            (isHealthIdExist && isHealthIdCheckSuccess) ||
                            isHealthIdCheckError) &&
                            separate && (
                                <Text>
                                    {formErrors[keyName]?.message ||
                                        'This ABHA Number is not available, try again!'}
                                </Text>
                            )}
                    </View>
                )}
            />
            {(!!formErrors[keyName] ||
                (isHealthIdExist && isHealthIdCheckSuccess) ||
                isHealthIdCheckError) &&
                !separate && (
                    <Text>
                        {formErrors[keyName]?.message ||
                            'This ABHA Number is not available, try again!'}
                    </Text>
                )}
        </>
    );
};

export default InputHealthIdSearch;
