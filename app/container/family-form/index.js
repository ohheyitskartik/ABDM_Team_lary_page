import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useRoute } from '@react-navigation/native';
import familyAnimation from '../../../res/animations/family.json';
import Menu from './menu';
import { allergies } from './allergies';
import { disease } from './gen-disease';
import Button2 from '../../components/button2';

const FamilyForm = () => {
    const hisText =
        'A family health history can identify people with a higher-than-usual chance of having common disorders, such as heart disease, high blood pressure, stroke, certain cancers, and type 2 diabetes.';
    const { uid } = auth().currentUser;
    const route = useRoute();
    const { familyData } = route.params;

    const [fatherAllergies, setFatherAllergies] = useState([]);
    const [fatherGenD, setFatherGenD] = useState([]);
    const [motherAllergies, setMotherAllergies] = useState([]);
    const [motherGenD, setMotherGenD] = useState([]);

    useEffect(() => {
        if (!familyData) {
            database()
                .ref(`/users/u-${uid}/family-history`)
                .once('value')
                .then((snapshot) => {
                    setFatherGenD(snapshot.val()?.fatherData?.fatherGenD || []);
                    setFatherAllergies(snapshot.val()?.fatherData?.fatherAllergies || []);
                    setMotherGenD(snapshot.val()?.motherData?.motherGenD || []);
                    setMotherAllergies(snapshot.val()?.motherData?.motherAllergies || []);
                });
        } else {
            setFatherGenD(familyData?.fatherData?.fatherGenD || []);
            setFatherAllergies(familyData?.fatherData?.fatherAllergies || []);
            setMotherGenD(familyData?.motherData?.motherGenD || []);
            setMotherAllergies(familyData?.motherData?.motherAllergies || []);
        }
    }, []);

    const handlePress = () => {
        database()
            .ref(`/users/u-${uid}/family-history`)
            .update({
                fatherData: {
                    fatherAllergies,
                    fatherGenD,
                },
                motherData: {
                    motherAllergies,
                    motherGenD,
                },
            })
            .then(() => console.log('Data set.'));
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.lottieContainer}>
                <LottieView source={familyAnimation} autoPlay loop />
            </View>
            <View style={styles.fh}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        paddingBottom: 10,
                    }}>
                    Family History
                </Text>
                <Text
                    style={{ fontSize: 16, color: 'gray', textAlign: 'justify', marginBottom: 20 }}>
                    {hisText}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Father Side</Text>
                <Menu s={fatherGenD} setS={setFatherGenD} list={disease} text="Genetic Disease" />
                <Menu
                    s={fatherAllergies}
                    setS={setFatherAllergies}
                    list={allergies}
                    text="Allergy"
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 30 }}>
                    Mother Side
                </Text>
                <Menu s={motherGenD} setS={setMotherGenD} list={disease} text="Genetic Disease" />
                <Menu
                    s={motherAllergies}
                    setS={setMotherAllergies}
                    list={allergies}
                    text="Allergy"
                />
                <Button2 text="Submit" onPress={handlePress} />
            </View>
        </ScrollView>
    );
};

export default FamilyForm;

const styles = StyleSheet.create({
    fh: {
        top: -50,
    },
    container: {
        padding: 20,
        backgroundColor: 'white',
    },
    textInput: {
        borderWidth: 1,
        padding: 14,
        borderRadius: 12,
        borderColor: '#1e91a3',
        fontSize: 16,
        marginVertical: 10,
        width: '70%',
        marginRight: 10,
    },
    lottieContainer: { width: '100%', height: 300, alignSelf: 'center', top: -50 },
});
