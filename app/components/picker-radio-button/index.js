import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import RadioButton from '../radio';
import Text from '../text';
import styles from './styles';

const PickerRadioButton = ({ data, currentSelection, selected }) => {
    const setCurrentSelection = (item) => {
        currentSelection(item);
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => {
                            setCurrentSelection(item);
                        }}
                        style={[styles.list, index < data.length - 1 ? styles.seprator : {}]}>
                        <Text size={14} fontType="bold">
                            {item}
                        </Text>
                        <RadioButton
                            color="#1e91a3"
                            colorSelected="#1e91a3"
                            onPress={() => {
                                setCurrentSelection(item);
                            }}
                            selected={item === selected}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default PickerRadioButton;

PickerRadioButton.propTypes = {
    data: PropTypes.array.isRequired,
    currentSelection: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
};
