import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import loginAnimation from '../../res/animations/login.json';
import Button2 from '../components/button2';

function Login() {
    // If null, no SMS has been sent
    const [number, setNumber] = useState(null);

    const navigation = useNavigation();

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        console.log(confirmation);
        navigation.navigate('OTP', {
            confirm: confirmation,
            number,
        });
    }

    return (
        <KeyboardAwareScrollView style={styles.loginContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.lottieContainer}>
                    <LottieView source={loginAnimation} autoPlay loop />
                </View>
                <View style={styles.loginText}>
                    <Text style={styles.mainText}>{'One Place \nfor all your Health'}</Text>
                    <Text style={styles.subText}>
                        Login with your phone number to access all about your health
                    </Text>
                </View>
                <TextInput
                    keyboardType="number-pad"
                    style={styles.textInput}
                    value={number}
                    maxLength={10}
                    onChangeText={(n) => setNumber(n.replace(/[^0-9]/g, ''))}
                    placeholder="Enter 10 Digit Mobile Number"
                />
                <Button2 onPress={() => signInWithPhoneNumber(`+91-${number}`)} text="Get OTP" />
            </View>
        </KeyboardAwareScrollView>
    );
}

export default Login;

const styles = StyleSheet.create({
    loginContainer: { backgroundColor: 'white', flex: 1 },
    mainContainer: { marginHorizontal: 25 },
    lottieContainer: { width: '110%', height: 460, alignSelf: 'center' },
    otpBText: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    loginText: {
        marginTop: -50,
    },
    textInput: {
        borderWidth: 1,
        padding: 14,
        borderRadius: 12,
        borderColor: '#1e91a3',
        fontSize: 16,
        marginVertical: 10,
    },
    btn: {
        backgroundColor: '#2659EA',
        width: 100,
        borderRadius: 14,
    },
    mainText: { fontSize: 30, fontWeight: 'bold' },
    subText: { fontSize: 18, paddingTop: 5, paddingBottom: 20, color: 'gray' },
});
