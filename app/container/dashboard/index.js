import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';
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
import Auth from '../../auth';

const Dashboard = () => {
    const navigation = useNavigation();
    const { data, pollenData } = useAmbee();
    const [url, setUrl] = useState();

    const { data: HealthData, isFetched, syncAppleHealth } = useAppleHealthData();
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
        if (!url) {
            navigation.navigate('Family Form', {});
        }
    }, []);
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <WelcomeCard name="Kartik" />
            <OverViewCard />
            <LifeStyleCard
                calories={1283}
                hrv={22}
                airQuality={data?.stations[0]?.aqiInfo?.category}
                polen={pollenData?.data[0]?.Risk?.weed_pollen}
            />
            <AbhaNudge imgUrl={url} />
            <Linegraph />
            <Glass />
        </ScrollView>
    );
};

export default Dashboard;
