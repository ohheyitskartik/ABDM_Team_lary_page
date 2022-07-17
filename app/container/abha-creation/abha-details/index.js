import { ScrollView, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import HealthIdImage from './abha-card-image';
import Button from '../../../components/button';

const AbhaDetailsScreen = () => {
    const route = useRoute();
    const {
        params: { healthId, name, dateOfBirth, verifiedIdentifiers, image, token },
    } = route;
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.topInfoContainer}>
                    <HealthIdImage
                        healthId={healthId}
                        image={image}
                        name={name}
                        dateOfBirth={dateOfBirth}
                        verifiedIdentifiers={verifiedIdentifiers}
                    />
                </View>
                <View>
                    <Button>Upload My Document</Button>
                </View>
            </ScrollView>
        </View>
    );
};

export default AbhaDetailsScreen;
