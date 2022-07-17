import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import styles from './styles';
import WelcomeCard from '../../components/welcome-card';
import OverViewCard from '../../components/overview-card';
import Glass from '../../components/glass';
import LifeStyleCard from '../../components/lifestyle-card';
import AbhaNudge from '../../components/abha-nudge';
import Linegraph from '../../components/line-graph';
import { useAmbee } from '../ambee/hooks';
import { useAppleHealthData } from '../tracker/hooks';

const Dashboard = () => {
    const { data, isFetching, isFetchingPollenData, pollenData } = useAmbee();
    useEffect(() => {
        if (!isFetching) {
            console.log('Data Pollen', isFetching, data.stations[0].aqiInfo.category);
        }
    }, [isFetching, isFetchingPollenData]);

    const { data: HealthData, isFetched, syncAppleHealth } = useAppleHealthData();

    useEffect(() => {
        console.log('HEALTHDATA', HealthData);
    }, [HealthData]);
    return (
        <>
            <View style={styles.contentContainer}>
                <WelcomeCard name="Kartik" />
                <OverViewCard />
                <LifeStyleCard
                    calories={456}
                    totalDistance="3.5"
                    hrv={24}
                    airQuality={data?.stations[0]?.aqiInfo?.category}
                    polen={pollenData?.data[0]?.Risk?.weed_pollen}
                />
                <AbhaNudge />
                <Linegraph />
            </View>

            <Glass />
        </>
    );
};

export default Dashboard;
