import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import DateBox from './date-box';
import styles from './styles';
import { getYearList, getDefaulDate } from './helpers';
import { blueberry } from '../../../colors';

const YearPickerDropDown = ({
    yearLabel,
    onDateSelect,
    maximumDate,
    value,
    disabled,
    selectionColor,
    height,
    paddingV,
    fieldErrorStyle,
}) => {
    const [selectedDate, setSelectedDate] = useState(getDefaulDate(value));
    const years = getYearList(maximumDate);

    useEffect(() => {
        setSelectedDate(getDefaulDate(value));
    }, [value]);

    const handleDateChange = (key, selectedValue) => {
        const dateObject = { ...selectedDate };
        dateObject[key] = selectedValue;
        const { year } = dateObject;

        if (year) {
            onDateSelect(year);
        }

        setSelectedDate(dateObject);
    };

    return (
        <View style={styles.container}>
            <DateBox
                label={yearLabel}
                value={selectedDate.year}
                options={years}
                onChange={(option) => {
                    handleDateChange('year', option);
                }}
                fieldErrorStyle={fieldErrorStyle}
                height={height}
                paddingV={paddingV}
                disabled={disabled}
                selectionColor={selectionColor}
            />
        </View>
    );
};

YearPickerDropDown.defaultProps = {
    yearLabel: 'YYYY',
    maximumDate: null,
    value: null,
    disabled: false,
    selectionColor: blueberry,
    height: 60,
    paddingV: 17,
    fieldErrorStyle: {},
};

YearPickerDropDown.propTypes = {
    value: PropTypes.string,
    maximumDate: PropTypes.string,
    yearLabel: PropTypes.string,
    onDateSelect: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    selectionColor: PropTypes.string,
    height: PropTypes.number,
    paddingV: PropTypes.number,
    fieldErrorStyle: PropTypes.object,
};

export default YearPickerDropDown;
