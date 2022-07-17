import { ScrollView, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import HealthIdImage from './abha-card-image';
import Button from '../../../components/button';
import { height, scale, width } from '../../../../utils';
import { useUploadFiles } from './hooks';

const AbhaDetailsScreen = () => {
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
                        width,
                        height: height / 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 12,
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
                        onPress={uploadGeneratedReportMutate}
                        style={{ backgroundColor: '#1e91a3' }}>
                        Upload My Document
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
};

export default AbhaDetailsScreen;
