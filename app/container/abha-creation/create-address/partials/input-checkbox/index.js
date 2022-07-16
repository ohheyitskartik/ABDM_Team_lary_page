import { View } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';
import Text from '../../../../../components/text';
import GenderCheckBox from '../gender-checkbox/index.js';
import styles from './styles';

const genderArray = [
    { id: 1, label: 'Male', value: 'M' },
    { id: 2, label: 'Female', value: 'F' },
    { id: 3, label: 'Others', value: 'O' },
];

const InputCheckBox = ({ control, formErrors, keyName, inputHeader, defaultValue = 'Male' }) => {
    return (
        <>
            <Controller
                name={keyName}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <View>
                        <Text color="#1e91a3" fontType="bold" style={styles.checkBoxHeader}>
                            {inputHeader}
                        </Text>
                        <GenderCheckBox
                            value={String(value || defaultValue)}
                            onCheckBoxClick={(val) => onChange(val)}
                            genderArray={genderArray}
                        />
                    </View>
                )}
            />
            {!!formErrors[keyName] && <Text>{formErrors[keyName]?.message}</Text>}
        </>
    );
};

export default InputCheckBox;
