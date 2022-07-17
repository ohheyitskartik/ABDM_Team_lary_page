/* eslint-disable react/style-prop-object */
import { View, Text } from 'react-native';
import React from 'react';
import {
    Canvas,
    BackdropBlur,
    Fill,
    Circle,
    BlurMask,
    Box,
    rrect,
    rect,
    Group,
    RoundedRect,
    LinearGradient,
    vec,
    SkiaView,
} from '@shopify/react-native-skia';
import styles from './styles';

const Glass = () => {
    const r = 60;
    const blur = 400;

    return (
        <>
            <Canvas style={styles.container}>
                {/* <Circle cx={300} cy={100} r={r} color="lightgreen">
                <BlurMask blur={blur} style="normal" />
            </Circle> */}
                <Circle cx={0} cy={-50} r={r} color="lightgreen">
                    <BlurMask blur={blur} style="normal" />
                </Circle>

                <Group transform={[{ rotateZ: 20 }]} color="lightgreen">
                    <RoundedRect x={244} y={-290} width={50} height={200} r={5}>
                        <BlurMask blur={blur} style="normal" />
                        <LinearGradient
                            start={vec(100, 0)}
                            end={vec(200, 256)}
                            colors={['yellow', 'lightgreen']}
                            mode="mirror"
                        />
                    </RoundedRect>

                    <RoundedRect x={504} y={-150} width={50} height={500} r={5}>
                        <BlurMask blur={blur} style="normal" />
                        <LinearGradient
                            start={vec(200, 0)}
                            end={vec(400, 256)}
                            colors={['yellow', 'lightgreen']}
                            mode="mirror"
                        />
                    </RoundedRect>
                </Group>

                <Circle cx={350} cy={760} r={r} color="lightgreen">
                    <BlurMask blur={blur} style="normal" />
                </Circle>

                {/* <BackdropBlur blur={50}>
                <Fill color="rgba(0, 200, 0, 0)" />
            </BackdropBlur> */}
            </Canvas>
        </>
    );
};

export default Glass;
