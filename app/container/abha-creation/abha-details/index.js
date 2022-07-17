import { ScrollView, View } from 'react-native';
import React from 'react';
import { useRoute, CommonActions } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import HealthIdImage from './abha-card-image';
import Button from '../../../components/button';
import { height, scale, width } from '../../../../utils';
import { useUploadFiles } from './hooks';

const AbhaDetailsScreen = (props) => {
    const route = useRoute();
    const {
        params: { healthId, name, dateOfBirth, verifiedIdentifiers, imageUrl },
    } = route;
    const { uploadGeneratedReportMutate } = useUploadFiles({
        healthId,
        name,
        mobileNumber: verifiedIdentifiers[0].value,
        fileLink: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    });
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.topInfoContainer}>
                    <HealthIdImage
                        healthId={healthId}
                        image={imageUrl}
                        name={name}
                        dateOfBirth={dateOfBirth}
                        verifiedIdentifiers={verifiedIdentifiers}
                    />
                </View>

                <FastImage
                    source={{ uri: imageUrl }}
                    style={{
                        width: width + 300,
                        height: height / 2,
                        alignSelf: 'center',
                        borderRadius: 12,
                        marginTop: -25,
                        marginBottom: 40,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <View
                    style={{
                        width: '80%',
                        justifyContent: 'flex-end',
                        marginHorizontal: scale(40),
                    }}>
                    <Button
                        onPress={() => {
                            const resetAction = CommonActions.reset({
                                index: 1,
                                routes: [{ name: 'Dashboard' }],
                            });
                            props.navigation.dispatch(resetAction);
                        }}
                        style={{ backgroundColor: '#1e91a3' }}>
                        Go to Home
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
};

export default AbhaDetailsScreen;
