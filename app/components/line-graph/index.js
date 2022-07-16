import { View } from 'react-native';
import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { width } from '../../../utils';
import styles from './styles';
import Text from '../text';

const Linegraph = () => {
    const chartConfig = {
        backgroundGradientFrom: '#021B07',
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: '#334756',
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        propsForLabels: { fill: '#EFEAD8' },
        propsForVerticalLabels: { fill: '#D0C9C0`' },
        propsForHorizontalLabels: { fill: '#D0C9C0' },
    };
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(113, 232, 81, ${opacity})`, // optional
                strokeWidth: 7, // optional
            },
        ],
    };

    return (
        <View style={styles.container}>
            <Text fontType="bold" style={styles.chartHeading}>
                Recent Trends
            </Text>
            <LineChart
                data={data}
                width={width - 20}
                height={180}
                chartConfig={chartConfig}
                style={styles.chart}
                bezier
            />
        </View>
    );
};

export default Linegraph;
