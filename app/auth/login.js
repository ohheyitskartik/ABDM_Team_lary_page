import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

function Login() {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');
    const [number, setNumber] = useState(null);

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    if (!confirm) {
        return (
            <>
                <TextInput
                    style={{ border: 1 }}
                    value={number}
                    onChangeText={(n) => setNumber(n)}
                    placeholder="Enter 10 Digit Mobile Number"
                />
                <Button
                    title="Phone Number Sign In"
                    onPress={() => signInWithPhoneNumber(`+91-${number}`)}
                />
            </>
        );
    }

    return (
        <>
            <TextInput style={{ border: 1 }} value={code} onChangeText={(text) => setCode(text)} />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </>
    );
}

export default Login;
