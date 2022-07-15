import { useEffect, useRef, useState } from 'react';
import AppleHealthKit from 'react-native-health';

const healthKitPermissions = {
    permissions: {
        read: [
            AppleHealthKit.Constants.Permissions.Steps,
            AppleHealthKit.Constants.Permissions.StepCount,
            AppleHealthKit.Constants.Permissions.Weight,
            AppleHealthKit.Constants.Permissions.Height,
            AppleHealthKit.Constants.Permissions.HeartRate,
            AppleHealthKit.Constants.Permissions.BodyMassIndex,
        ],
    },
};

export const useSteps = () => {
    const dataRef = useRef({});
    const [data, setData] = useState();
    const startDate = new Date(2022, 6, 6).toISOString();
    const endDate = new Date().toISOString();

    const syncAppleHealth = () => {
        AppleHealthKit.getDailyStepCountSamples(
            { startDate, endDate, includeManuallyAdded: true },
            (error, results) => {
                if (error) {
                    console.log('Error', error);
                }
                console.log(results);
            },
        );

        AppleHealthKit.getHeartRateSamples(
            {
                unit: 'bpm',
                startDate,
                endDate,
                includeManuallyAdded: true,
            },
            (error, results) => {
                if (error) {
                    console.log('Error', error);
                }
                console.log(results);
            },
        );
    };

    useEffect(() => {
        setData(dataRef.current);
    }, []);

    return { syncAppleHealth, data };
};

export const useLinkDevice = () => {
    const initHealthKit = () => {
        AppleHealthKit.initHealthKit(healthKitPermissions, async (err) => {
            if (err) {
                logger.log('Error in activation apple health', err);
            }
        });
    };

    return {
        initHealthKit,
    };
};
