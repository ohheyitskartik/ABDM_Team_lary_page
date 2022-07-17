import { View } from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';
import moment from 'moment';
import PropTypes from 'prop-types';
import Text from '../../../../../components/text';
import YearPickerDropDown from '../../../../../components/year-picker-dropdown';
import { white } from '../../../../../../colors';
import styles from './styles';

const InputDropDown = ({ control, formErrors, keyName, inputHeader, defaultValue }) => {
    return (
        <>
            <Controller
                name={keyName}
                control={control}
                render={({ field: { onChange } }) => (
                    <View style={styles.dropDownHeader}>
                        <YearPickerDropDown
                            yearLabel={inputHeader}
                            selectionColor={white}
                            value={defaultValue}
                            onDateSelect={(val) => {
                                onChange({ year: val });
                            }}
                            maximumDate={moment().year().toString()}
                        />
                    </View>
                )}
            />
            {!!formErrors[keyName] && <Text>{formErrors[keyName]?.message}</Text>}
        </>
    );
};

export default InputDropDown;
InputDropDown.propTypes = {
    control: PropTypes.string.isRequired,
    formErrors: PropTypes.string.isRequired,
    keyName: PropTypes.string.isRequired,
    inputHeader: PropTypes.string.isRequired,
    defaultValue: PropTypes.string.isRequired,
};
