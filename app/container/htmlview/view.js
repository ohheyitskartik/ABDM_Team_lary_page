import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import RenderHTML from 'react-native-render-html';
import { useRoute } from '@react-navigation/native';

const HTMLView = () => {
    const route = useRoute();
    const { html } = route.params;
    return null;
};

export default HTMLView;
