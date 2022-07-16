import { ScrollView, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import HealthIdImage from './abha-card-image';

const AbhaDetailsScreen = () => {
    // const route = useRoute();

    const { params: { healthId = '', healthIdUri = '', userData = {} } = {} } = useRoute();
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.topInfoContainer}>
                    <HealthIdImage healthId={healthId} imageUrl={healthIdUri} />
                </View>
            </ScrollView>
        </View>
    );
};

export default AbhaDetailsScreen;
