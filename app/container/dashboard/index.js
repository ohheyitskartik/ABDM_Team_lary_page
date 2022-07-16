import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import WelcomeCard from '../../components/welcome-card';
import OverViewCard from '../../components/overview-card';
import Glass from '../../components/glass';
import LifeStyleCard from '../../components/lifestyle-card';
import AbhaNudge from '../../components/abha-nudge';
import Linegraph from '../../components/line-graph';

const Dashboard = () => {
    return (
        <>
            <View style={styles.contentContainer}>
                <WelcomeCard name="Kartik" />
                <OverViewCard />
                <LifeStyleCard
                    calories={456}
                    totalDistance="3.5"
                    hrv={24}
                    airQuality={3.5}
                    polen={3.5}
                />
                <AbhaNudge />
                <Linegraph />
            </View>

            <Glass />
        </>
    );
};

export default Dashboard;
