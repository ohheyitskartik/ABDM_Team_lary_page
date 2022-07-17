import { ActivityIndicator, View } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FastImage from 'react-native-fast-image';
import Text from '../../../../components/text';
import Button from '../../../../components/button';
import { white } from '../../../../../colors';
import styles from './styles';
import { useCreateId } from './hooks';
import InputTextFields from '../partials/input-text-fields';
import InputCheckBox from '../partials/input-checkbox';
import InputDropDown from '../partials/input-dropdown';
import InputHealthIdSearch from '../partials/input-health-id-search';
import { images } from '../../abha-details/abha-card-image/images';
import { scale } from '../../../../../utils';

const HealthIdCreateForm = () => {
    const {
        control,
        formErrors,
        userDetails,
        handleSubmit,
        healthIdText,
        setHealthIdText,
        onCreateHealthIdFormSubmit,
        isCreateHealthIdLoading,
    } = useCreateId();
    return (
        <>
            <KeyboardAwareScrollView style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <FastImage
                            source={images.NHAlogo}
                            style={{ width: scale(250), height: scale(250), paddingHorizontal: 30 }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Create ABHA ID</Text>
                    <InputHealthIdSearch
                        control={control}
                        formErrors={formErrors}
                        keyName="healthId"
                        inputHeader="ABHA Id*"
                        healthIdText={healthIdText}
                        setHealthIdText={setHealthIdText}
                    />
                    <InputTextFields
                        defaultValue={userDetails?.firstName}
                        control={control}
                        formErrors={formErrors}
                        keyName="firstName"
                        inputHeader="First Name*"
                    />
                    <InputTextFields
                        control={control}
                        defaultValue={userDetails?.lastName}
                        formErrors={formErrors}
                        keyName="lastName"
                        inputHeader="Last Name"
                    />
                    <InputDropDown
                        defaultValue={userDetails?.dateOfBirth}
                        control={control}
                        formErrors={formErrors}
                        keyName="dateOfBirth"
                        inputHeader="Year of Birth*"
                    />
                    <InputCheckBox
                        defaultValue={userDetails?.gender}
                        control={control}
                        formErrors={formErrors}
                        keyName="gender"
                        inputHeader="Gender*"
                    />
                    <InputTextFields
                        control={control}
                        formErrors={formErrors}
                        keyName="pin"
                        inputHeader="PIN Code*"
                    />
                </View>
                <View style={styles.buttonView}>
                    <Button
                        onPress={handleSubmit(onCreateHealthIdFormSubmit)}
                        style={{ backgroundColor: '#1e91a3' }}>
                        {isCreateHealthIdLoading ? (
                            <ActivityIndicator color={white} size="small" />
                        ) : (
                            <Text color={white} fontType="bold">
                                Generate ABHA Number
                            </Text>
                        )}
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        </>
    );
};

export default HealthIdCreateForm;
