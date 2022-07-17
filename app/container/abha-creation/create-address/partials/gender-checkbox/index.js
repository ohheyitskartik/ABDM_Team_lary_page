import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../../../components/text';
import { black, white } from '../../../../../../colors';
import styles from './styles';

const GenderCheckBox = ({ genderArray, onCheckBoxClick, value }) => {
    return (
        <View style={styles.container}>
            {genderArray?.map((gender) => {
                const isSelected = gender?.value === value;
                return (
                    <TouchableOpacity
                        key={gender?.id}
                        onPress={() => onCheckBoxClick(gender?.value)}
                        style={isSelected ? styles.selectedGenderBox : styles.genderBox}>
                        <Text color={isSelected ? white : black}>{gender?.label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default GenderCheckBox;
GenderCheckBox.propTypes = {
    genderArray: PropTypes.array.isRequired,
    onCheckBoxClick: PropTypes.func,
    value: PropTypes.string,
};
GenderCheckBox.defaultProps = {
    onCheckBoxClick: () => {},
    value: 'M',
};
