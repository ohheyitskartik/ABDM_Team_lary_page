import { useEffect, useState } from 'react';
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
            AppleHealthKit.Constants.Permissions.SleepAnalysis,
            AppleHealthKit.Constants.Permissions.Caffeine,
            AppleHealthKit.Constants.Permissions.OxygenSaturation,
            AppleHealthKit.Constants.Permissions.Vo2Max,
            AppleHealthKit.Constants.Permissions.HeartRateVariability,
        ],
    },
};

export const useSteps = () => {
    const [data, setData] = useState({});
    const [count, setCount] = useState(0);
    const startDate = new Date(2022, 6, 13).toISOString();
    const endDate = new Date().toISOString();
    const isFetched = count === 10;

    const increment = () => {
        setCount((old) => old + 1);
    };

    const syncAppleHealth = () => {
        AppleHealthKit.getDailyStepCountSamples(
            { startDate, endDate, includeManuallyAdded: true },
            (error, results) => {
                increment();
                if (error) {
                    console.log('Error', error);
                }
                setData((old) => {
                    return { ...old, step_count: results };
                });
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
                increment();
                if (error) {
                    console.log('Error', error);
                }
                setData((old) => {
                    return { ...old, heart_rate: results };
                });
            },
        );

        AppleHealthKit.getLatestHeight(null, (error, results) => {
            increment();
            if (error) {
                console.log('Error', error);
            }
            setData((old) => {
                return { ...old, height: results };
            });
        });

        AppleHealthKit.getLatestBmi(null, (error, results) => {
            increment();
            if (error) {
                console.log('Error', error);
            }
            setData((old) => {
                return { ...old, bmi: results };
            });
        });

        AppleHealthKit.getLatestWeight(null, (error, results) => {
            increment();
            if (error) {
                console.log('Error', error);
            }
            setData((old) => {
                return { ...old, weight: results };
            });
        });

        AppleHealthKit.getHeightSamples({ startDate, endDate }, (error, results) => {
            increment();
            if (error) {
                console.log('Error', error);
            }
            setData((old) => {
                return { ...old, height_samples: results };
            });
        });

        AppleHealthKit.getWeightSamples({ startDate, endDate }, (error, results) => {
            increment();
            if (error) {
                console.log('Error', error);
            }
            setData((old) => {
                return { ...old, weight_samples: results };
            });
        });

        AppleHealthKit.getHeartRateVariabilitySamples({ startDate, endDate }, (error, results) => {
            increment();
            if (error) {
                console.log('Error', error);
            }
            setData((old) => {
                return { ...old, heart_variability: results };
            });
        });

        AppleHealthKit.getOxygenSaturationSamples({ startDate, endDate }, (error, results) => {
            increment();
            if (error) {
                console.log('Error', error);
            }
            setData((old) => {
                return { ...old, oxygen_saturation_sample: results };
            });
        });

        AppleHealthKit.getSleepSamples({ startDate, endDate }, (error, results) => {
            increment();
            if (error) {
                console.log('Error', error);
            }
            setData((old) => {
                return { ...old, sleep_sample: results };
            });
        });
    };

    useEffect(() => {
        if (isFetched) {
            setCount(0);
        }
    }, [isFetched]);

    return { syncAppleHealth, isFetched, data };
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
