import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import WelcomeCard from '../../components/welcome-card';
import OverViewCard from '../../components/overview-card';
import Glass from '../../components/glass';
import LifeStyleCard from '../../components/lifestyle-card';
import AbhaNudge from '../../components/abha-nudge';
import Linegraph from '../../components/line-graph';
import { useAmbee } from '../ambee/hooks';
import { useAppleHealthData } from '../tracker/hooks';
import CustomImage from '../../components/image';

const Dashboard = () => {
    const { data, pollenData } = useAmbee();
    const [url, setUrl] = useState();

    const { data: HealthData, isFetched, syncAppleHealth } = useAppleHealthData();
<<<<<<< HEAD

    return (
        <>
            <View style={styles.contentContainer}>
                <WelcomeCard />
                <OverViewCard />
                <LifeStyleCard
                    hrv={HealthData?.hrv}
                    calories={HealthData?.caloriesBurned}
                    airQuality={data?.stations[0]?.aqiInfo?.category}
                    polen={pollenData?.data[0]?.Risk?.weed_pollen}
                />
                <AbhaNudge />
                <Linegraph />
            </View>

=======
    useEffect(() => {
        const getFromAsyncStorage = async () => {
            try {
                const imgUrl = await AsyncStorage.getItem('ABHA_IMG_URL');
                if (imgUrl) {
                    setUrl(imgUrl);
                } else {
                    setUrl('');
                }
            } catch (err) {
                console.log(err);
            }
        };
        getFromAsyncStorage();
    }, []);
    useEffect(() => {
        // console.log('HEALTHDATA', HealthData);
    }, [HealthData]);
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
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
            <CustomImage url={url} />
>>>>>>> origin/abha-image-component
            <Glass />
        </ScrollView>
    );
};

export default Dashboard;
