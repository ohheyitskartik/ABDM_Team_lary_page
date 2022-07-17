import { View, Text } from 'react-native';
import React, { useMemo, useState } from 'react';
import { Bar } from 'react-native-progress';
import { sub } from 'react-native-reanimated';
import { scale } from '../../../utils';

const ProgressCap = ({ width, progress }) => {
    const color = useMemo(() => {
        let colorInternal;
        if (progress[0] > 0 && progress[1] > 0 && progress[2] > 0) {
            colorInternal = '#58CC92';
        } else if (progress[0] > 0 && progress[1] > 0 && progress[2] <= 0) {
            colorInternal = '#A4DBF5';
        } else {
            colorInternal = '#FFC7C7';
        }
        return colorInternal;
    }, [progress]);
    const subtract = 20;
    const marginRight = 3;
    const height = 10;
    return (
        <View style={{ width, flexDirection: 'row', paddingVertical: scale(5) }}>
            <Bar
                progress={progress[0]}
                color={color}
                width={width / 3 - subtract}
                style={{ marginRight }}
                height={height}
            />
            <Bar
                progress={progress[1]}
                color={color}
                width={width / 3 - subtract}
                style={{ marginRight }}
                height={height}
            />
            <Bar
                progress={progress[2]}
                color={color}
                width={width / 3 - subtract}
                height={height}
            />
        </View>
    );
};

export default ProgressCap;
