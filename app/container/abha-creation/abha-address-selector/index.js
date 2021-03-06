import { ActivityIndicator, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import Button from '../../../components/button';
import Icon from '../../../components/icon';
import Text from '../../../components/text';
import { cerulean, brightOrange, black, white } from '../../../../colors';
import PickerRadioButton from '../../../components/picker-radio-button';
import { useAbhaselector } from './hooks';

const HealthIDSelector = () => {
    const { mappedPhrAddress, mobileNumber, token, selected, onPress, setSelected, isLoading } =
        useAbhaselector();
    const navigation = useNavigation();
    const { phoneNumber } = auth().currentUser;

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.selectorHeading} size={15} fontType="bold">
                    {mappedPhrAddress.slice(0, 4).length} Addresses found for {phoneNumber.slice(3)}
                </Text>
                <View style={styles.informationContainer}>
                    <Icon
                        name="information-circle"
                        variant="ionIcons"
                        size={15}
                        color={brightOrange}
                        style={styles.informationIcon}
                    />
                    <Text size={11} color={black}>
                        Please select an Address to Proceed With
                    </Text>
                </View>
                <PickerRadioButton
                    data={mappedPhrAddress.slice(0, 4)}
                    selected={selected}
                    currentSelection={setSelected}
                />
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.continue}>
                    <Button style={styles.continueButton} onPress={onPress}>
                        {isLoading ? <ActivityIndicator color={white} /> : 'Continue'}
                    </Button>
                    {mappedPhrAddress.length <= 4 && (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Create your Abha Address', {
                                    mobileNumber,
                                    token,
                                    selectedAddress: selected,
                                })
                            }
                            style={styles.createNewAbhaStyle}>
                            <Text color="white" size={10}>
                                Want to Create new ABHA Address?{' '}
                            </Text>
                            <Text
                                size={10}
                                color={cerulean}
                                fontType="bold"
                                style={styles.clickableText}>
                                Create ABHA
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
};

export default HealthIDSelector;
