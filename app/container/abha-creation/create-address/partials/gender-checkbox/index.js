import { TouchableOpacity, View } from 'react-native';
import React from 'react';
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
